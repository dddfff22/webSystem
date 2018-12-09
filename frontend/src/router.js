import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import MainPage from './views/MainPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //     path: '/login',    //node server routing - /login  /mainpage
    //     name: 'login',     //vue routing - the other vue pages in mainpage
    //     component: 
    // },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: MainPage
      // component: ()=> import('./views/MainPage.vue')
    },
    {
      path: '/user/:userName',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "post" */ './views/UserPage.vue')
    },
    {
      path: '/search/:searchValue',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "post" */ './views/Search.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
