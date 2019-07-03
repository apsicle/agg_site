import Vue from 'vue';

import axios from 'axios';
import App from './App.vue';
import router from './router/index.js';

import store from './store/store.js';

// Grab auth token if it's already set.
let token = window.localStorage.getItem('agg_token');
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config)
    return config;
  }, function (error) {
    // Do something with request error
    console.log('error!')
    return Promise.reject(error);
});

// Try to authenticate user
store.dispatch('setUserFromToken', token);

new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)
});