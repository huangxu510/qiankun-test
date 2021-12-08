import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import startQiankun from './micro'

Vue.use(VueRouter)
Vue.config.productionTip = false

startQiankun({
  prefetch: false,
  sandbox: {
    // strictStyleIsolation: true // shadowDom样式隔离
    experimentalStyleIsolation: true
  },
  singular: true
})

const router = new VueRouter({
  mode: 'history',
  routes: []
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
