<template>
  <div >
    <div v-if="isLoggedIn" class="ui grid container">
      <img class="four wide column" v-for="image in imageList" :key="image.id" v-bind:src="image.link" />
    </div>
    <h2 v-else>log in to get started </h2>
  </div>

</template>

<script>
    import {mapActions ,mapGetters} from 'vuex'
    export default {
        name: "imageList",
        methods: mapActions(['fetchImage']),
        created(){
            this.fetchImage();
        },
        computed:{
            ...mapGetters(['imageList' ,'isLoggedIn'])
        }


    }
</script>

<style scoped>
  h2{
    margin: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
</style>