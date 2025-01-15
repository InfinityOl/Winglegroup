import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import UserDetails from '../views/UserDetails.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserList
    },
    {
      path: '/user/:id',
      name: 'user-details',
      component: UserDetails,
      props: true
    }
  ]
})

export default router