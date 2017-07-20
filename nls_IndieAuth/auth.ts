import has from '@dojo/has/main';
const bundlePath = ((has('host-node') ? __dirname : 'src/Auth/IndieAuth/nls') + '/auth');
const locales = [ 'de' ];

const messages = {
  warning: 'Warning',
  error: 'Error',
  node: 'requires node.js',
  js: 'Please enable JavaScript to sign in !',
  _new: 'new',
  _and: 'and',
  yes: 'yes',
  no: 'no',
  chars: 'characters',
  mfs: 'microformats',
  cardHeader: 'YOU SIGN IN',
  as: 'AS',
  to: 'TO',
  headerNote: 'Authenticate using one of the methods below',
  client_id: 'Either no value for "client_id" was found or an internal error occurred!',
  me: 'Parameter "me" is missing.',
  meInvalid: 'Invalid "me" parameter. The value must be a valid URL.',
  meInsecure: 'Insecure "me" parameter. Value must be a valid URL matching the /auth?me value.',
  verifyInvalid: 'Invalid "verify" parameter. Value must be a valid provider URL.',
  verifyInsecure: 'Insecure "verify" parameter. Value must be a valid provider URL from /auth.',
  verifyNoCred: 'Could not find IndieAuth server credentials for _{title}.',
  verifyNoMe: 'Could not find any rel="me" links at _{title}.',
  verifyInvalidMe: 'Could not find a matching rel="me" link at _{title}.',
  verifyTmpInvalidMe: 'Could not find any matching rel="me" links!<br>Click to authenticate by ' +
    'setting your URL at _{title}.',
  verifyNoHeader: 'Endpoint did not acknowledge it is an authorization endpoint.<br>' +
    'The endpoint should return an "IndieAuth: authorization_endpoint" header.',
  verifyNotSelf: 'This auth server cannot be used to authenticate to itself.',
  verifyNoProvider: 'No valid IndieAuth provider',
  verifySuccess: 'OK! Click to authenticate using _{title}.',
  notSupported: 'This is not a supported IndieAuth provider.',
  accessInsecure: 'Insecure "authorize"/"access" parameter. Value must be a valid provider URL from /auth.',
  accessInvalid: 'This provider could not be verified.',
  accessUserId: 'Could not verify the user id of the provider.',
  accessUserMe: 'Could not verify the rel="me" link with the provider.',
  msgPrepare: 'Composing a message. Please wait...',
  sent: 'We have sent you a _{provider}.<br>Enter the Verification Code',
  sign: 'GPG - Sign this token<br>with your private key',
  secLeft: '_{seconds} seconds left !',
  noRes: 'no response',
  noSuccess: 'The response was not successful.',
  unknown: 'An unknown error occured. Something went horribly wrong. Sorry!',
  cFoundNot: 'Not installed yet',
  cFoundAll: 'All providers installed'
};

export default { bundlePath, locales, messages };
