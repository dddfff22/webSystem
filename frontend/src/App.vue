<template>
  <div id="app">
    <login v-if="currentUserExist()==false"></login>
    <usermain v-else-if="currentUserExist()==true"></usermain>
    <div>
    </div>
  </div>
</template>

<script>
import login from './views/Login.vue'
import usermain from './views/Main.vue'
// import firebase,{ auth } from 'firebase'


export default {
  name: 'app',
  components: {
    login,
    usermain
  },
  data() {
    return {
      auth: null,
    }
  },
  methods: {
    currentUserExist() {
      if(this.$localStorage.get('auth')) {
        console.log("localStorage.auth exist")
        this.auth = this.$localStorage.get('auth');
        return true;
      }
      else {
        this.$router.push({ path: '/'});
        return false;
      }
    }
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
