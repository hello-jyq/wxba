// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Meta from 'vue-meta'
import api from './api/apis'
import './assets/addon/validform/validform.css'
import { get, post, put, deletes } from './web.config/axios.config'
import { setCookie, getCookie, delCookie } from './web.config/cookie.config'


import './assets/js/validator'   //校验规则


Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.HOST = '/api'  //本地代理
Vue.use(Meta)                //头部标签管理
Vue.prototype.$api = api     //api管理

//axios 封装
Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$put = put;
Vue.prototype.$delete = deletes;
//cookie 封装
Vue.prototype.$cookieStore = {
  setCookie,
  getCookie,
  delCookie
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
