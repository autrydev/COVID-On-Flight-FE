import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import UserSignup from '../views/UserSignup.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'
import CovidInfo from '../views/CovidInfo.vue'
import MyCovidStatus from '../views/MyCovidStatus.vue'
import AccountSettings from '../views/AccountSettings.vue'
import Survey from '../views/Survey.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'User Sign Up',
    component: UserSignup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/covid19informaion',
    name: 'CovidInfo',
    component: CovidInfo
  },
  {
    path: '/mycovidstatus',
    name: 'MyCovidStatus',
    component: MyCovidStatus
  },
  {
    path: '/accountsettings',
    name: 'AccountSettings',
    component: AccountSettings
  },
  {
    path: '/survey',
    name: 'survey',
    component: Survey
  }
]

const router = new VueRouter({
  routes
})

export default router