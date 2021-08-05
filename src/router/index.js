// 配置路由相关的信息
import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../view/Home'
 
Vue.use(VueRouter)
 
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
]
const router = new VueRouter({
  // 配置路由和组件之间的应用关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
 
// 3.将router对象传入到Vue实例
export default router
 