import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routes = [
  {
    name: 'auto',
    path: '/auto',
    component: () => import('../views/auto')
  },
  {
    name: 'auto-bool-switch',
    path: '/auto-bool-switch',
    component: () => import('../views/auto-bool-switch')
  },
  {
    name: 'auto-enum-dropmenu',
    path: '/auto-enum-dropmenu',
    component: () => import('../views/auto-enum-dropmenu')
  },
  {
    name: 'auto-rang-slider',
    path: '/auto-rang-slider',
    component: () => import('../views/auto-rang-slider')
  }
]

export default new Router({
  linkActiveClass: 'sidebar-nav-item-active',
  routes
})
