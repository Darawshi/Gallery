<template>
  <div>
    <appHeader></appHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import appHeader from "./components/appHeader";
  export default {
    name: 'App',
    components: { appHeader }
  }
</script>



<style>
</style>
