<template>
  <div>
    <div v-if="isLoggedIn" class="ui blue button dropper container">
      <input  type="file"
              @change="uploadImage($event.target.files)"
              multiple
              accept="image/*"
      />
      <span>Drag files here!</span>
    </div>
    <h2 v-else>log in to get started </h2>
  </div>
</template>

<script>
import  {mapActions,mapGetters} from 'vuex';
    export default {
        name: "upload",
        methods:mapActions(['uploadImage']),
        computed:mapGetters(['isLoggedIn'])
    }
</script>

<style scoped>
  .dropper{
    height:30vh;
    width:70%;
    border:3px dashed #b58105;
    border-radius: 10px;
    margin: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  input{
    width: 100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
  }
  input:hover{
    cursor: pointer;
  }

  h2{
    margin: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
</style>