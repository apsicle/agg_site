import Vue from 'vue'
import Router from 'vue-router'

// Users
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

// Pages
import Home from '@/components/postings/Home.vue';
import MakePost from '@/components/postings/MakePost.vue'

Vue.use(Router)

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/submit', component: MakePost },

]  

export default new Router({
  routes,
  mode: 'history',
})