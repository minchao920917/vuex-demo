import Vue from 'vue'
import App from './App.vue'
import EventBus from './state';

Vue.prototype.$bus = EventBus;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
