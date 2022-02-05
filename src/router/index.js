import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Father from '../views/Father.vue'
import Change from '../views/Change.vue'
import Change2 from '../views/Change2.vue'
import Enter from '../views/Enter.vue'
import computed from '../views/computed.vue'






const routes = [
  {
    path: '/computed',
    name: 'computed',
    component: computed
  },
  {
    path: '/Enter',
    name: 'Enter',
    component: Enter
  },
  {
    path: '/Change2',
    name: 'Change2',
    component: Change2
  },
  {
    path: '/Change',
    name: 'Change',
    component: Change
  },
  {
    path: '/Father',
    name: 'Father',
    component: Father
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
