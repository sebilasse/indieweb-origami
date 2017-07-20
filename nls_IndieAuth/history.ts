import has from '@dojo/has/main';
const bundlePath = ((has('host-node') ? __dirname : 'src/Auth/IndieAuth/nls') + '/history');
const locales = [ 'de' ];

const messages = {
  TODO: 'TODO',
  x: ''
};

export default { bundlePath, locales, messages };
