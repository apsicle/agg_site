<template>
    <div id="profile">
        This is {{this.$route.params.id}}'s profile.
        TESTING !  ! ! 
    </div>
</template>

<script>
import 'axios';

export default {
    data() {
        return {

        }
    },
    mounted() {
        // axios.get('users/');
    },
}
</script>

<style>

</style>