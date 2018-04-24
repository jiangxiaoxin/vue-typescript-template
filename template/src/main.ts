import Vue from 'vue';
import App from './App.vue';
{{#router}}
import router from './router';
{{/router}}

Vue.config.productionTip = false;

new Vue({
  {{#if_eq build "runtime"}}
  render: h => h(App)
  {{/if_eq}}
  {{#router}}
  router,
  {{/router}}
}).$mount('#app');
