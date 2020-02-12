import Vue from 'vue'
import VueRouter from 'vue-router'
import Registration from '../components/User/Registration'
import Login from '../components/User/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
