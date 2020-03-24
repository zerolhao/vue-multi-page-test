import Vue from 'vue'
import view from './view.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(view)
}).$mount('#app')
