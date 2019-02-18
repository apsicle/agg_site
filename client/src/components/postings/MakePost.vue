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
                })
            }
        }
    }
</script>