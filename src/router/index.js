import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import register from '@/components/register'
import home from '@/components/home/index'
import good from '@/components/goods/good'
import upgood from '@/components/goods/upgood'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/good',
      name: 'good',
      component: good
    },
    {
      path: '/upgood',
      name: 'upgood',
      component: upgood
    }
  ]
})
