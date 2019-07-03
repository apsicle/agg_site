<template>
    <div id="post-container">
        <img class="thumbnail" src="@/assets/moon1-unsplash.jpg">
        <div id="descriptors">
            <div id="link">
                <a :href="posting.link">{{ posting.title }}</a>
            </div>
            <div id="author-info">
                Posted by {{ metadata.author.username }}
            </div>
            <div id="actions">
                <router-link :to="{name: 'fullPosting', params: {title: `${posting.title}_${posting.id}`, posting: posting}}">{{posting.num_comments}} comments</router-link>
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        props: {
            posting: Object,
            metadata: Object,
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
@import "~/_variables.scss";

    #post-container {
        display: flex;
        padding: $p-s;
        border-bottom: 1px solid $charcoal;
    }

    .thumbnail {
        width: 5em;
        height: 5em;
        margin-right: $p-s;
    }

    #descriptors {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
    }

    #author-info {
        font-size: 0.7rem;
    }

    #actions {
        font-size: 0.7rem;
    }


</style>