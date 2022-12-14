import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

if (typeof window !== 'undefined') window.global = window; // https://github.com/vuejs/vuepress/issues/1434#issuecomment-816268942

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify);
  options.vuetify = new Vuetify({})
};
