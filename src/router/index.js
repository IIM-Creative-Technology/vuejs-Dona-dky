import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '../views/SignUp.vue'
import Login from '../views/Login.vue'

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  el: '#app',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      redirect: ''
    },
    {
      path: '/sign-up',
      name: 'Sign-up',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})

export default router

// // import { createRouter, createWebHistory } from 'vue-router'
// import Vue from 'vue'
// import Home from '../views/Home.vue'
// import Router from 'vue-router'
// import SignUp from '../views/SignUp.vue'
// import Login from '../views/Login.vue'

// Vue.use(Router)

// // const routes = [
// //   {
// //     path: '/',
// //     name: 'Home',
// //     component: Home
// //   },

// //   {
// //     path: '/about',
// //     name: 'About',
// //     // route level code-splitting
// //     // this generates a separate chunk (about.[hash].js) for this route
// //     // which is lazy-loaded when the route is visited.
// //     component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
// //   },

// //   {
// //     path: '/sign-up',
// //     name: 'sign-up',
// //     component: SignUp
// //   },

// //   {
// //     path: '/login',
// //     name: 'login',
// //     component: Login
// //   },
// // ]

// // const router = createRouter({
// //   history: createWebHistory(process.env.BASE_URL),
// //   routes
// // })

// export default new Router({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       component: Home
//     },
//     {
//       path: '/sign-up',
//       name: 'sign-up',
//       component: SignUp
//     },
//     {
//       path: '/login',
//       name: 'login',
//       component: Login
//     }
//   ]
// })
