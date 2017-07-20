import nlsCommon from './common';
import nlsIndex from './index';
import nlsSetup from './setup';
import nlsDevelopers from './developers';
import nlsFAQ from './faq';
import nlsHistory from './history';
import nlsCLI from './CLI';
import nlsAuth from './auth';

const nlsBundles: any = {
  common: nlsCommon,
  index: nlsIndex,
  setup: nlsSetup,
  developers: nlsDevelopers,
  faq: nlsFAQ,
  history: nlsHistory,
  CLI: nlsCLI,
  auth: nlsAuth
}

export default nlsBundles;
