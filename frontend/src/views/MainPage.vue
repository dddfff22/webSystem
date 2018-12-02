<template>
  <div class="main-page">
      <main-top> </main-top>
       <main-body> </main-body>
  </div>
</template>


<script>

import MainBody from '@/components/MainBody.vue'
import MainTop from '@/components/MainTop.vue'

export default {

    
  name: 'mainpage',
  components: {
    MainBody,
    MainTop
  }
}


</script>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
