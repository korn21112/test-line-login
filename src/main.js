import { createApp } from 'vue'
import App from './App.vue'
Vue.prototype.$liff = window.liff
Vue.config.productionTip = false

createApp(App).mount('#app')
