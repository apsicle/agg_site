<template>
    <div id="app-container">
        <NavBanner class="nav-banner"/>
        <router-view></router-view>
    </div>
</template>

<script>
import NavBanner from '@/components/NavBanner.vue';

export default {
    data() {
        return {
            message: 'Welcome to Leddit',
        
        };
    },
    components: {
        NavBanner,
    }
};
</script>

<style lang="scss">
@import "~/_settings.scss";
@import "~/_variables.scss";

#app-container {
    font-family: 'Roboto', sans-serif;
    color: blue;
    height: 100%;
    width: 100%;
}

.nav-banner {
    height: 10%;
}
</style>