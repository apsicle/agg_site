import Vue from 'vue';
import Router from 'vue-router';

// Users
import Login from '@/components/Login.vue';
import Signup from '@/components/Signup.vue';
import UserProfile from '@/components/UserProfile.vue';

// Pages
import Home from '@/components/postings/Home.vue';
import MakePost from '@/components/postings/MakePost.vue';
import PostingFull from '@/components/postings/PostingFull.vue';

// Test
import GroupedCheckbox from '@/components/test/GroupedCheckbox.vue';

Vue.use(Router);

const routes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', component: Signup },
    { path: '/submit', component: MakePost },
    { path: '/profile/:id', component: UserProfile },
    { path: '/l/all/:title', name: 'fullPosting', component: PostingFull, props: true },
    { path: '/test', name:'test', component: GroupedCheckbox, props: true }
];

export default new Router({
  routes,
  mode: 'history',
});