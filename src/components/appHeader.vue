<template>
    <div class="ui secondary pointing menu">
        <router-link to="/" class="item">Home</router-link>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <router-link to="/" class="ui item">Gallery</router-link>
                <router-link to="/upload" class="ui item">Upload</router-link>
                <a @click="logOut" class="ui item">logOut</a>
            </div>
            <a v-else href="#" @click="login" class="ui item">LogIn</a>
        </div>
    </div>
</template>

<script>
    import { mapActions , mapGetters } from 'vuex'
    export default {
        name: "appHeader",
        methods: mapActions(['login' , 'logOut']),
        computed:mapGetters(['isLoggedIn'])
    };
</script>

<style scoped>
    .horizontal{
        display: flex;

    }
</style>