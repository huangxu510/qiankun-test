import { createApp } from 'vue'
import AppRoot from './App.vue'
import routes from './router'
import './public-path'
import { createRouter, createWebHistory } from 'vue-router'

let router = null
let instance = null

function render() {
  instance = createApp(AppRoot)

  const history = createWebHistory(
    window.__POWERED_BY_QIANKUN__ ? '/vue3' : '/'
  )

  router = createRouter({
    history,
    routes
  })

  // 全局注册自定义组件
  instance.use(router).mount('#vue3-micro-app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  console.log('[Vue3MicroApp] app bootstraped')
}

export async function mount(props) {
  console.log('[Vue3MicroApp] props from main framework', props)
  render(props)
}

export async function unmount() {
  console.log('[Vue3MicroApp] unmount')
  if (instance) {
    instance.unmount()
    instance._container.innerHTML = ''
    instance = null
  }
  router = null
}
