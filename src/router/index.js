import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Sample from '../views/Sample.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/agendar_post',
    name: 'agendar_post',
    component: Sample
  },
  {
    path: '/calendario',
    name: 'calendario',
    component: Sample
  },
  {
    path: '/inbox',
    name: 'inbox',
    component: Sample
  },
  {
    path: '/feed',
    name: 'feed',
    component: Sample
  },
  {
    path: '/workflow',
    name: 'workflow',
    component: Sample
  },
  {
    path: '/acompanhamento',
    name: 'acompanhamento',
    component: Sample
  },
  {
    path: '/relatorios',
    name: 'relatorios',
    component: Sample
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
