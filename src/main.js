// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/index'
import myMixins from './mixins/index'

Vue.use(VueRouter)

import { routes } from './routes/index'

let router = new VueRouter({
  mode: 'hash',
  routes,
  store
})

Vue.mixin(myMixins)

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})
