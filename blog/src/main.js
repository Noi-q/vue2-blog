import Vue from 'vue'
import App from './App.vue'


// vue-router
import router from './router'

// element-ui
import {Button} from 'element-ui'
Vue.component(Button.name,Button)

// Global Components
import Nav from './GlobalComponents/Nav'
Vue.component(Nav.name,Nav)

// vuex
import store from './store/index.js'

// axios
// import Axios from 'axios'
// Vue.prototype.$axios = Axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
