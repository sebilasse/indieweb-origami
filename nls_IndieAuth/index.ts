import has from '@dojo/has/main';
import { _ } from '../../../util/string/main';
const bundlePath = ((has('host-node') ? __dirname : 'src/Auth/IndieAuth/nls') + '/index');
const locales = [ 'de' ];

const messages = {
  slogan: 'Be just &ldquo;you&rdquo;.',
  providers: 'Providers',
  what: 'What is IndieAuth?',
  whatText: _`IndieAuth is a way to <b>use your own domain name</b> to sign in to websites.<br />
    It works by linking your website to one or more authentication providers such as
    Twitter or GitHub, then entering your domain name in the login form on websites
    that support IndieAuth.`,
  why: 'Why IndieAuth?',
  whyText: _`IndieAuth is part of the <a href="http://indiewebcamp.com/why">IndieWeb movement</a>
    to take back control of your online identity. Instead of logging in to websites as
    &ldquo;you on Twitter&rdquo; or &ldquo;you on Facebook&rdquo;,
    you should be able to log in as just &ldquo;you&rdquo;.<br><br>
    We should not be relying on <a href="https://indieweb.org/silo">SILOs</a> to provide
    our authenticated identities, we should be able to use our own domain names to log in to
    sites everywhere.`,
  how: 'How to Set Up IndieAuth?',
  how1: _`Add links on your home page to your social profiles<br>with the attribute
    <a href="http://microformats.org/wiki/rel-me">rel="me"</a>.`,
  how2: 'Ensure your profiles link back to your home page.',
  howLabel: 'Full setup instructions',
  join: 'Join Us!',
  attend: 'Attend an',
  eventN: 'event nearby',
  join1: 'Add yourself to the IndieWebCamp Guest List<br>after signing in with your own domain',
  join2: 'Add your own IndieWeb projects to the Project List'
};

export default { bundlePath, locales, messages };
