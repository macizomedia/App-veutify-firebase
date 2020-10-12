import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.config.productionTip = false

// Code from TodoApp by IanLuan
let app = '';

var firebaseConfig = {
  apiKey: "AIzaSyDQIoencSXDlBQDNwV9ZhDN7aItRmlJ4sg",
  authDomain: "ykdelete.firebaseapp.com",
  databaseURL: "https://ykdelete.firebaseio.com",
  projectId: "ykdelete",
  storageBucket: "ykdelete.appspot.com",
  messagingSenderId: "870656007488",
  appId: "1:870656007488:web:04f43ee99899ddfc4deea5",
  measurementId: "G-F3H5SZ5JRG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount('#app')
  }

});
