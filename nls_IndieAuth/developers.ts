import has from '@dojo/has/main';
import { _ } from '../../../util/string/main';
const bundlePath = ((has('host-node') ? __dirname : 'src/Auth/IndieAuth/nls') + '/developers');
const locales = [ 'de' ];

const messages = {
  _okRes: 'An example successful response',
  _errRes: 'An example error response',
  description: 'for developers',
  introHead: 'Using IndieAuth.com to sign users in to your website',
  introLead: 'Create a Web Sign-in form',
  intro: _`If you are building a website and need to sign people in,
    you can use IndieAuth.com to handle web sign-in so that you
    don\'t have to implement OAuth code for each provider.`,
  paramHead: 'Form Parameters',
  paramAction: _`<b>action</b>: Set the action of the form to your IndieAuth service
    (you can use <code>https://indieauth.com/auth</code> &mdash; or
    <a href="https://github.com/aaronpk/IndieAuth">download the source</a>
    and run your own server).`,
  paramMe: '<b>me</b>: The "me" parameter is the URL that the user enters',
  paramClientId: _`<b>client_id</b>: Set the client_id in a hidden field to let us know
    the home page of the application the user is signing in to`,
  paramRedirectUri: _`<b>redirect_uri</b>: Set the redirect_uri in a hidden field to
    let us know where to redirect back to after authentication is complete`,
  lead1: 'The user logs in with their domain',
  text1: _`After the user enters their domain in the sign-in form and submits,
    IndieAuth goes and scans their domain looking for rel="me" links
    from providers it knows about
    (see <a href="./index.html#providers">Supported Providers</a> above).
    It also verifies that the third-party website links back
    to the user\'s domain with a rel="me" link as well.`,
  lead2: 'The user is redirected back to your site',
  text2: _`If everything is successful, the user will be redirected back to the redirect_uri
    you specified in the form. There will be a token in the query string parameter`,
  lead3: 'Verify the authorization code with indieauth.com',
  text3: _`At this point you need to verify the code which will also return the domain
    name of the authenticated user. Make a POST request to indieauth.com/auth
    with the code and all the original parameters of the request, and you will
    get back the domain name of the authenticated user.`,
  lead4: 'Done!',
  text4: _`Finally you know the domain belonging to the authenticated user.
    You can store the domain secure session and log the user in with their
    domain name identity. You don\'t need to worry about whether they
    authenticated with Google, Twitter or Github, their identity is their
    domain name! You won\'t have to worry about merging duplicate accounts
    or handling error cases when Twitter is offline.`
};

export default { bundlePath, locales, messages };
