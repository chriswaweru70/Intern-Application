import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import router from './router'
import store from './store'
import './registerServiceWorker'

import './sass/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyC1VxgUbm5skxivdiCl662COVbjzEZD0JE",
      authDomain: "internapp-5a597.firebaseapp.com",
      databaseURL: "https://internapp-5a597.firebaseio.com",
      projectId: "internapp-5a597",
      storageBucket: "internapp-5a597.appspot.com",
      messagingSenderId: "6767975596",
      appId: "1:6767975596:web:d45d8a85b221b510079309",
      measurementId: "G-8VWSJ2H1CX"
    })
  }
}).$mount('#app')
