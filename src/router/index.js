import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import ChildsRoute from '@/views/router.js'

Vue.use(VueRouter)

const routes = [
]
routes.push(...ChildsRoute)
const router = new VueRouter({
  routes
})

export default router
