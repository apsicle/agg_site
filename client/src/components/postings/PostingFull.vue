<template>
    <div id="posting-full">
        <div id="posting-full-header">
            This is a sample posting full page
            {{ posting.metadata.author }} wrote this;
        </div>
    </div>
</template>

<script>
import MakeComment from "@/components/postings/MakeComment.vue";

export default {
    data() {
        return {
            
        }
    },

    props: {
        posting: Object
    },

    components: {
        MakeComment,
    }
}
</script>

<style lang="scss">
@import "~/_variables.scss";

#posting-full-header {
    height: 25%;
    border-bottom: 1px solid $charcoal;

}
</style>