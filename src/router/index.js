import { createRouter, createWebHistory } from 'vue-router'
import authHandler from "../components/authHandler";
import imageList from "../components/imageList";
import upload from "../components/upload";

const routes = [

  {
    path: '/oauth2/callback',
    component: authHandler
  },
    {
        path: '/',
        component: imageList
    },
    {
        path: '/upload',
        component: upload
    },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

 const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
