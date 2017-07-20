import has from '@dojo/has/main';
import { _ } from '../../../util/string/main';
const bundlePath = ((has('host-node') ? __dirname : 'src/Auth/IndieAuth/nls') + '/setup');
const locales = [ 'de' ];

const messages = {
  _generateHcard: 'Generate your h-card',
  description: 'Documentation',
  lead1: 'Link to your various social profiles on your home page',
  text1: _`On your home page, link to your profiles and add the <code>rel="me"</code>
    attribute to the links.<br>This may look something like the following:`,
  text1_2: _`If you don\'t want visible links on your home page, you can instead use
    <code>&lt;link&gt;</code> tags<br>in your html header.`,
  lead2: 'On each service, ensure there is a link back to you',
  text2: _`You\'ll need to verify that each service has a link back to your home page.<br>
    For convenience the "edit profile" links for some supported services are below.`,
  lead3: 'You\'re done!',
  text3: 'That\'s it!<br>Now you can use your domain to sign in to any sites that support IndieAuth!'
};

export default { bundlePath, locales, messages };
