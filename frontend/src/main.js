import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import firebase from 'firebase'
import Vuetifiy from 'vuetify'
// import VueSessionStorage from 'vue-sessionstorage'
import VueLocalStorage from 'vue-localstorage'
import VModal from 'vue-js-modal'

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuetifiy)
Vue.use(VueLocalStorage)
// Vue.use(VueSessionStorage)
Vue.use(VModal, { dynamic: true })

var config = {
  apiKey: "AIzaSyA9HFZLi-jvWnYF70ruH6g5YnffXNHoqc4",
  authDomain: "t-stagram.firebaseapp.com",
  databaseURL: "https://t-stagram.firebaseio.com",
  projectId: "t-stagram",
  storageBucket: "t-stagram.appspot.com",
  messagingSenderId: "13903417921"
}
firebase.initializeApp(config)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
