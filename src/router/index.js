import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/view/shared/layout'
import Login from '@/view/secure/login'
import adpostDetail from '@/view/wx/adminPostDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/login',
      children: [
        {
          path: 'login',
          component: Login,
          name: 'login',
          meta: {
            hidden: true
          }
        }
      ]
    },
    {
      path: '/adpostdetail',
      name: 'adpostDetail',
      component: adpostDetail,
      // redirect: '/login',
    }
  ]
})
