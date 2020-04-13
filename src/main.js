import Vue from 'vue'
import App from './App.vue'

/#ブラウザ依存の解除#/
import './assets/css/reset.css'

/#スクロールボタン#/
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
