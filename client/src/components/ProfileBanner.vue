<template>
    <div>
        <div id="login" v-if="!user">
            <router-link to="/login">Login</router-link>
            <router-link to="/signup">No account? Sign up!</router-link>
        </div>
        <div id="profile" v-else>
            <router-link :to="`/profile/${user.username}`">{{user.username}}</router-link>
            <router-link to="/submit">Make a post</router-link>
            <button @click="logout" type="button">Logout</button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '@/store/store.js';
import axios from 'axios';

export default {
    data() {
        return {
            
        };
    },

    computed: {
        ...mapGetters([
            'user',
        ]),
    },

    methods: {
        logout() {
            window.localStorage.clear('agg_token');
            delete axios.defaults.headers.common['Authorization'];
            store.commit('clearUser');
            this.$router.push('/login');
            console.log("Successfully logged out")
        },
    },
}
</script>

<style>
#profile {
    display: flex;
    flex-direction: column;
}
</style>