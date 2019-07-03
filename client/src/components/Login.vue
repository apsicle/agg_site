<template>
    <div id="login">
        Login Below:
        <form @submit.prevent="handleLogin">
            Username
            <input type="text" name="username" v-model="username"/>
            Password
            <input type="text" name="password" v-model="password"/>

            <input type="submit" value="Login"/>
        </form>
        <router-link to="/signup">No account? Sign up!</router-link>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="success">
            Success! Logged in with auth token.
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            username: "",
            password: "",
            users: false,
            error: "",
            success: false
        };
    },
    methods: {
        handleLogin() {
            axios.post('users/login/', {
                username: this.username,
                password: this.password,
            }).then((response) => {
                this.success = true;
                this.error = "";
                window.localStorage.setItem('agg_token', response.data.token);
                axios.defaults.headers.common['Authorization'] = `Token ${response.data.token}`;
                this.setUserFromToken(response.data.token);
                this.$router.push('/')
                console.log("Login was successful")
            }).catch((error) => {
                this.error = error;
                console.log("Login failed")
            })
        },
        ...mapActions([
            'setUserFromToken',
        ])
    },
}
</script>

<style>
    
</style>