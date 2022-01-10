import Vue from 'vue'
import App from './App.vue'


// vue-router
import router from './router'

// element-ui
import {Button} from 'element-ui'
Vue.component(Button.name,Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
