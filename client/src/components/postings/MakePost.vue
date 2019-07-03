<template>
    <div>
        <form @submit.prevent="handleSubmit">
            Title
            <input type="text" name="title" v-model="title"/>
            Link
            <input type="text" name="link" v-model="link"/>
            <input type="submit" value="Submit Link"/>
        </form>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                title: "",
                link: ""
            }
        },
        methods: {
            handleSubmit() {
                axios.post('/posts/', {
                    title: this.title,
                    link: this.link,
                }).then((response) => {
                    console.log('Post successfully created.')
                    this.$router.push("/")
                }).catch((err) => {
                    if (err.response.status === 403 || err.response.status === 401) {
                        this.$router.push({ name: 'signup', params: {error: "Please sign in to make a post." }})
                    }
                });
            }
        }
    }
</script>