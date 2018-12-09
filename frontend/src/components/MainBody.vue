<template>
  <div class="main-body">
  <div class="idbox">
    <h1>{{id}}</h1>
  </div>
  <div calss="image">
    <img v-bind:src="link" /> 
  </div>

  </div>
</template>


<script>

export default {
  name: 'MainBody',
  props: {
    msg: String,
    id:String,
    link:String
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
.main-body{
  border:2px solid gray;
}

</style>
