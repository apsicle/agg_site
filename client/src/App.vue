<template>
    <div id="app">
        <NavBanner/>
        <ProfileBanner/>
        <router-view></router-view>
    </div>


</template>

<script>
    import ProfileBanner from '@/components/ProfileBanner.vue';
    import NavBanner from '@/components/NavBanner.vue';

    export default {
        data() {
            return {
                message: 'Welcome to Leddit',
            
            };
        },
        components: {
            ProfileBanner,
            NavBanner,
        }
    };
</script>

<style>
    #app {
        font-size: 18px;
        font-family: 'Roboto', sans-serif;
        color: blue;
    }
</style>