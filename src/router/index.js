import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/index.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Home
}]

export default new VueRouter({
  routes
})
