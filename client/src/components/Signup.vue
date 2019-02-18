<template>
    <div id="signup">
        Sign up for the site!

        <form @submit.prevent="handleSignup">
            Email
            <input type="text" name="email" v-model="email"/>
            Username
            <input type="text" name="username" v-model="username"/>
            Password
            <input type="text" name="password" v-model="password"/>

            <input type="submit" value="Sign up"/>
        </form>
        <router-link to="/login">Back to log in</router-link>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                email: "",
                username: "",
                password: "",
            }
        },
        methods: {
            handleSignup() {
                axios.post('users/', {
                    email: this.email,
                    username: this.username,
                    password: this.password,
                })
            }
        }
    }
</script>
