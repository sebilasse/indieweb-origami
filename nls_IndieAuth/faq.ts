import has from '@dojo/has/main';
import { _ } from '../../../util/string/main';
const bundlePath = ((has('host-node') ? __dirname : 'src/Auth/IndieAuth/nls') + '/faq');
const locales = [ 'de' ];

const messages = {
  faq: 'Frequently Asked Questions',
  q1: 'How is this different from OpenID?',
  a1: _`The goals of OpenID and IndieAuth are similar. Both encourage you to sign in
    to a website using your own domain name. However, OpenID has failed to gain
    wide adoption, at least in part due to the complexities of the protocol.
    IndieAuth is a simpler implementation of a similar goal, by leveraging other
    OAuth providers and behaviors that people are already accustomed to.`,
  q2: 'Can my rel="me" links be hidden on my home page?',
  a2: _`Yes, your rel="me" links do not need to be visible, but the html does need
    to be on your home page. You can hide the links with CSS, or include them
    as &lt;link&gt; tags in your html head.`,
  q3: 'What if a rel="me" link is private?',
  a3: `We are working for a solution with JWT. Stay tuned.`,
  q4: 'Does this require users to have their own domain name?',
  a4: _`Yes, the assumption is that people are willing to
    <a href="http://indiewebcamp.com/why">own their online identities</a>
    in the form of a domain name. It is getting easier and easier to host content
    on your own domain name. See
    "<a href="http://indiewebcamp.com/Getting_Started">Getting Started on the Indie Web</a>"
    for some suggestions, including mapping your domain to a Tumblr blog, or signing up
    <a href="https://www.uberspace.de">to be hosted on asteroids</a>
    or for any other simple web hosting service like
    <a href="http://www.dreamhost.com/r.cgi?426455">Dreamhost</a>.`,
  q5: 'But doesn\'t this make me dependent on your site, indieauth.com?',
  a5: _`This service exists for websites to use if they don\'t want to implement OAuth code
    for each provider. As a user signing in to the site, you don\'t need to worry about
    whether the site is using indieauth.com or some other RelMeAuth service.`,
  q6: 'What if IndieAuth.com is down?',
  a6: _`If an application is using IndieAuth.com as an auth service and IndieAuth.com is down,
    then logins to that website will not work. However this is just the same as if that site\'s
    own internal auth service is down had they implemented it themselves. Because of this
    potential risk, it is possible that some apps may wish to run their own instance of this
    software or implement <a href="http://indiewebcamp.com/RelMeAuth">RelMeAuth</a>
    directly to avoid relying on a third party service.`,
  q7: 'I run an authentication provider, how can I be added to the "supported providers" list?',
  a7: _`We gladly welcome new providers! The goal is to support as many as possible so users are not',
    'reliant on any one in particular. Here is what you need to do to be supported by IndieAuth:`,
  a7_1: 'Ensure your users have a way to enter their website address in the "profile" section of your website.',
  a7_2: _`When displaying the HTML rendering of a user\'s page, ensure the
    <a href="http://microformats.org/wiki/rel-me">rel="me"</a> attribute is set on the link.`,
  a7_3: 'Write a client to handle authenticating with your API and submit it.',
  a7_4: _`Integrate the new provider into the IndieAuth source codes, or just
    <a href="https://github.com/aaronpk/IndieAuth/issues/new">open an issue</a> with your request.`,
  q8: 'Why isn\'t Google+ working?',
  a8: _`Google+ profiles lost all the rel="me" attributes on links for personal pages.
    This was the result of google deprecating the "classical google plus" in 2017 ...<br>
    YouTube is supported.`,
  q9: 'Why does IndieAuth.com need to see my tweets and see who I follow?',
  a9: _`IndieAuth.com requests the minimum permissions from each OAuth provider.
    In some cases providers do not provide a scope that only verifies identity
    without also giving access to data such as public tweets.`
};

export default { bundlePath, locales, messages };
