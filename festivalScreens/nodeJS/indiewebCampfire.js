const fs = require('fs');
const dReq = require('@dojo/core/request').default;
const IRC = require('irc');
const IRCpeople = require('./ircPeople.json')
const TWI = require('twit');
const express = require('express');
const app = express();

/* CONFIG */
const D = '2017-09-04';
const Q = {'campfire':'#campfire17', 'indiewebcamp':'#IndieWeb OR #IndieWebCamp'};
const R = {'campfire':{}, 'indiewebcamp':{}, sched: {}};

/* CREDENTIALS */
const schedKey = 'ENTER_YOURS';
const twitterConfig = {
  consumer_key:         'ENTER_YOURS',
  consumer_secret:      'ENTER_YOURS',
  access_token:         'ENTER_YOURS',
  access_token_secret:  'ENTER_YOURS',
  timeout_ms:           40*1000,  // optional HTTP request timeout to apply to all requests.
};
const ircConfig = {
  channels: ['#indieweb', '#indieweb-meta'],
  server: 'irc.freenode.net',
  botName: 'IndiePad'
};

const T = new TWI(twitterConfig);
const bot = new IRC.Client(ircConfig.server, ircConfig.botName, {channels: ircConfig.channels});

/* IRC */
bot.addListener('error', function(message) {});
bot.addListener('message', function (from, to, text) {
  fs.readFile('./irc.json', 'utf8', (e, txt) => {
    if (!e) {
      var a = JSON.parse(txt);
      var o = {from, to, text, timestamp: new Date()};
      var avatarI = IRCpeople.nicks.indexOf(from)
      if (avatarI > -1) {
        o.avatar = IRCpeople.avatars[avatarI]
      }
      a.push(o);
      fs.writeFile('./irc.json', JSON.stringify(a), {encoding:'utf8'});
    }
  });
  //console.log(from + ' => ' + to + ': ' + text);
  //sl007 => #indieweb-meta: Zegnat - there will be google HangoutOnAir and IRC
});



/* URLS */
const U = {
  twit: 'search/tweets',
  sched: `https://campfirefestival2017.sched.com/api/session/export?api_key=${schedKey}&format=json`,
  //export?api_key=${schedKey}&format=json &fields=name,session_type,description
}

const twit = (key) => ({q: `${Q[key]} since:${D}`, count: 50});
const out  = function(id, cb) {
  return (e, data) => {
    if (!e) { R[id] = data }
    (typeof cb === 'function') && cb();
    return R
  }
}

//timestamp, from, to, text, avatar, images, videos
const twitterName = (o) => `${o.user.name} @${o.user.screen_name}`
const twitterToShout = (o) => {
  return (!o.statuses) ? {} : o.statuses.map((sO) => {
    const shout = {
      timestamp: sO.created_at,
      from: twitterName(sO),
      to: '',
      text: sO.text,
      avatar: sO.user.profile_image_url,
      images: []
    }
    if (!!sO.entities && !!sO.entities.media) {
      shout.images = (sO.entities.media||[]).map((m) => m.media_url)
    }
    return shout;
  });
  //  statuses/created_at,text,id
  //    /user/name,screen_name,profile_image_url
}

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  T.get(U.twit, twit('campfire'), out('campfire', () => {
    T.get(U.twit, twit('indiewebcamp'), out('indiewebcamp', () => {
      //console.log(R);
      dReq.get(U.sched).then(d => d.json()).then(sched => {
        R.campfire = twitterToShout(R.campfire);
        R.indiewebcamp = twitterToShout(R.indiewebcamp);
        R.sched = sched;
        res.status(200).json(R)
      });

    }))
  }))
})

app.listen(3000, function () {
  console.log('CAMPFIRE is listening on port 3000!')
})
