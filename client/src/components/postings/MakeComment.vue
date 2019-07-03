<template>
    <div id="write-comment">
        <textarea id="comment-textarea" ref="commentTextArea" rows="4" cols="50" placeholder="Enter comment..."></textarea>
        <button type="button" @click="handleSubmit">Submit</button>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },

    methods: {
        handleSubmit() {
            let comment = this.$refs.commentTextArea.value;
            
        }
    }
}
</script>

<style lang="scss">

#comment-textarea {
    resize: none;
}
</style>