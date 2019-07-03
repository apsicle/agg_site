<template>
    <div id="nav-banner" >
        <div id="logo-container">
            <img class="logo-image" src="@/assets/logo-200-200.png"/>
            <router-link class="subleddit-link" to="/">Welcome to Leddit</router-link>
            <router-link :to="{name: 'test', params: { inputs: ['Fish', 'Cat', 'Dog'] }}">Go to test thing</router-link>
        </div>

        <ProfileBanner class="profile-banner" />
    </div>
</template>

<script>
import ProfileBanner from '@/components/ProfileBanner.vue';

export default {
    data() {
        return {

        }
    },
    
    components: {
        ProfileBanner,
    }
}
</script>

<style lang="scss">
@import "~/_variables.scss";

    #logo-container {
        display: flex;
        align-items: center;
        align-self: center;
    }

    .logo-image {
        height: 100%;
        width: auto;
    }

    .subleddit-link {
        color: $charcoal;
        text-decoration: none;
    }

    #nav-banner {
        display: flex;
        justify-content: space-between;
        padding: $p-s;
        border-bottom: 1px solid $charcoal;
    }

    .profile-banner {
        display: flex;
        align-items: center;
    }
</style>