import Vue from 'vue';

import axios from 'axios';
import App from './App.vue';
import router from './router/index.js';

import store from './store/store.js';

let token = window.localStorage.getItem('agg_token');
if (token) {
    axios.defaults.headers.common['Authorization'] = `Token ${window.localStorage.getItem('agg_token')}`;
}
axios.defaults.baseURL = 'http://127.0.0.1:8000/';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config)
    return config;
  }, function (error) {
    // Do something with request error
    console.log('error!')
    return Promise.reject(error);
});

new Vue({
    router,
    el: '#app',
    render: h => h(App)
});