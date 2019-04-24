import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import OverView from '@/components/overview'
import Search from '@/components/search.vue'
import Indices from '@/components/indices.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: OverView
    },
    {
      path: '/query',
      name: 'query',
      component: Search
    },
    {
      path: '/indices',
      name: 'indices',
      component: Indices
    }
  ]
})

