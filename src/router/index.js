import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../views/ContadorView.vue')
    },
    {
      path: '/paises',
      name: 'paises',
      component: () => import('../views/APIView.vue')
    },
    {
      path: '/paises/:pais',
      name: 'pais',
      props: true,            //-- Para utilizarlos en <script>
      component: () => import('../views/PaisView.vue')
    }
  ]
})

export default router
