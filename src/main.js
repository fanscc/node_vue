// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import axios from 'axios'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$ = $
Vue.config.productionTip = false
let Message = ElementUI.Message
// 添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers['token'] = localStorage.getItem('token')
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})
console.log(axios)
// 添加一个响应拦截器
axios.interceptors.response.use(function (response) {
  // Do something with response data
  debugger
  if (response.data.code !== 0) {
    Message(response.data.message)
    return
  }
  return response.data
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
