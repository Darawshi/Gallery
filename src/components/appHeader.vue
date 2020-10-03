<template>
    <div class="ui secondary pointing menu">
        <a class="item">Home</a>
        <div class="right menu">
            <div v-if="isLoggedIn" class="horizontal">
                <a class="ui item">Gallery</a>
                <a class="ui item">Upload</a>
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