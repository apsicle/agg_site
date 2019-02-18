<template>
    <div id="post-container">
        <div id="thumbnail">
            <img class="thumbnail" src="@/assets/moon1-unsplash.jpg">
        </div>
        <div id="link">
            <a :href="link">{{ title }}</a>
        </div>
        <div id="actions">
            
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            link: String,
            title: String,
        },
        data() {
            return {

            }
        }
    }
</script>

<style>
    .thumbnail {
        width:150px;
        height:150px;
    }

    #post-container {
        display: flex;
        flex-direction: row;
    }

</style>