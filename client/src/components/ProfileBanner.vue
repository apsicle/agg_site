<template>
    <div>
        <div id="login" v-if="!loggedIn">
            <router-link to="/login">Login</router-link>
            <router-link to="/signup">No account? Sign up!</router-link>
        </div>
        <div id="profile" v-else>
            <router-link to="/submit">Make a post</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                loggedIn: window.localStorage.getItem('agg_token'),

            }
        }
    }
</script>