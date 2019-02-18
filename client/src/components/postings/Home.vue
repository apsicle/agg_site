<template>
    <div id="home">
        <PostingPreview id="postings" v-if="postings" v-for="posting in postings" :key="posting.id" :title="posting.title" :link="posting.link"/>
    </div>
</template>

<script>
    import PostingPreview from '@/components/postings/PostingPreview.vue';
    import axios from 'axios';

    export default {
        data() {
            return {
                postings: undefined,
            }
        },
        components: {
            PostingPreview, 
        },
        created() {
            this.loadPostings();
        },
        methods: {
            loadPostings() {
                axios.get('/posts/')
                    .then((response) => {
                        this.postings = response.data
                    })
            }
        }
    }
</script>