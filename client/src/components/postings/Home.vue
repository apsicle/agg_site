<template>
    <div id="home">
        <div id="col-left">
            &nbsp;
        </div>
        <div id="col-mid">
            <PostingPreview v-if="postings" v-for="posting in postings" :key="posting.id" 
            :metadata="posting.metadata" :posting="posting"/>
        </div>
        <div id="col-right">
            &nbsp;
        </div>
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
                });
        }
    }
}
</script>

<style lang="scss">
@import '~/_variables.scss';
#home {
    display: flex;
    height: 100%;
}

#col-left {
    display: inline-block;
    width: 20%;
    background-color: $grey;
}

#col-right {
    display: inline-block;
    width: 20%;
    background-color: $grey;
}

#col-mid {
    width: 60%;
}

</style>