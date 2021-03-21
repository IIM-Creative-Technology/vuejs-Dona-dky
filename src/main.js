import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// import Vue from 'vue'
// // import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'
// import Axios from 'axios'

// // createApp(App).use(store).use(router).mount('#app')

// Vue.config.productionTip = false
// // set auth header
// Axios.defaults.headers.common[Authorization] = `Bearer ${store.state.token}`
// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
