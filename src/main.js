// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import router from './router'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import currencyFilter from './filters/currency'
import VeeValidate from 'vee-validate'   //表單驗證
import zhTW_Validate from 'vee-validate/dist/locale/zh_TW'
import './bus'

axios.defaults.withCredentials = true
// 跨域必須加上這段且在login上的API必須使用 / admin / signin
Vue.use(VueAxios, axios)
Vue.use(VeeValidate, { events: 'input|blur', })    //修正移出欄位不顯示錯誤訊息的bug
VeeValidate.Validator.localize('zh_TW', zhTW_Validate)   //email錯誤提示中文化
Vue.component('Loading', Loading)
Vue.filter('currency', currencyFilter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
router.beforeEach((to, from, next) => {
  console.log('to', to, 'from', from, 'next', next)
  if (to.meta.requiresAuth) {
    const api = `${process.env.API_PATH}/api/user/check`;
    axios.post(api).then((response) => {
      console.log(response.data);
      if (response.data.success) {
        next();
      } else {
        next({ path: '/login' })
      }
    });
  } else {
    next()
  }

});
