import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition){
    return {
      behavior: "smooth",
      top: 0,
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/inspiration',
      name: 'Inspiration',
      component: () => import('../views/Inspiration.vue')
    },
    {
      path: '/interpretariat',
      name: 'Interpretariat',
      component: () => import('../views/Interpretariat.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/Contact.vue')
    }
  ]
})

export default router
