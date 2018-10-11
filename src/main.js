// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './directives'
import './components'
// 引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2'
import Message from './plugins/message'

// 使用插件
Vue.use(VueSweetalert2)
Vue.use(Message)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
