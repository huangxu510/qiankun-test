import { createApp } from 'vue'
import App from './App.vue'
import startQiankun from './micro'
import { createRouter, createWebHistory } from 'vue-router'

startQiankun({
  prefetch: false,
  sandbox: {
    // strictStyleIsolation: true // shadowDom样式隔离
    experimentalStyleIsolation: true
  },
  singular: true
})

const router = createRouter({
  history: createWebHistory(),
  routes: []
})

createApp(App).use(router).mount('#main-app')
