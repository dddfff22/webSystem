import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue'
import Main from './views/Main.vue'
import SignUp from './views/SignUp.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //     path: '/login',    //node server routing - /login  /mainpage
    //     name: 'login',     //vue routing - the other vue pages in mainpage
    //     component: 
    // },
    {
      path: '/usermain',
      name: 'usermain',
      component: Main
      // component: ()=> import('./views/MainPage.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: SignUp
      // component: ()=> import('./views/MainPage.vue')
    },
    {
      path: '/mainpage',
      name: 'mainpage',
      component: MainPage
      // component: ()=> import('./views/MainPage.vue')
    },
    {
      path: '/user/:userId',
      name: 'user',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "post" */ './views/UserPage.vue')
    },
    {
      path: '/hashtag/:tagValue',
      name: 'hashtag',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "post" */ './views/HashTagPage.vue')
    },
    {
      path: '/search/:searchValue',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "post" */ './views/Search.vue')
    },
    {
      path: '/edit/:userId',
      name: 'edit',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "post" */ './views/EditPage.vue')
    }
  ]
})
