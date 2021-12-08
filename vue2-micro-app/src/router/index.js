const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/view/Home.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('@/view/List.vue')
  }
]

export default routes
