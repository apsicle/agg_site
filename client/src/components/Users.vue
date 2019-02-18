<template>
    <div id="login">
        <br>
        Active Users:
        <div v-if="users" v-for="user in users" :key="user.id">
            {{ `This is user ${user.id}. Username: "${user.username}". Email: "${user.email}"` }}
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                username: "",
                password: "",
                users: false,
                error: "",
            };
        },
        methods: {
            handleLogin() {
                console.log("test");
                axios.post('users/login/', {
                    username: this.username,
                    password: this.password,
                }).then((response) => {
                    this.users = response.data;
                }).catch((error) => {
                })
                console.log('test2');
            }
        }
    }
</script>

<style>
    
</style>