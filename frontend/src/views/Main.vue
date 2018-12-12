<template>
  <div class="app">
      <div class="header">
        <router-link to="/mainpage"><img src="../assets/Tstagram_main_logo.png"></router-link> 
        <form>
          <input type="text" name="searchValue" v-model="searchValue">
          <router-link :to="{name: 'search', params: {searchValue: searchValue}}" tag="button">SEARCH</router-link> | 
        </form>
        <router-link :to="{name: 'user', params: {userId: currentUser}}">MYPAGE</router-link>
        <v-btn @click="Logout">Logout</v-btn>
      </div>
      <router-view/>
    <div class="body">
      
    </div>
  </div>
</template>
 <script>
// @ is an alias to /src
// import Search from '@/views/Search.vue'
 export default {
  name: 'usermain',
  created() {
      this.$router.push({ name: 'mainpage'});
  },
  data() {
    return {
      searchValue: "",
      currentUser: this.$session.get("auth").displayName
    }
  },
  methods: {
    Logout(){
      this.$localStorage.remove('auth')
      this.$router.push({ path: '/'});
      location.reload();
    },
  },
}
</script>


<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 .header {
  -webkit-box-align:center;
  -webkit-align-items:center;
  -ms-flex-align:center;
  align-items:center; 
  display:-webkit-box; 
  top: 0;
    left: 0;
   margin: 0;
    padding: 0;
  border:2px solid gray;
  -webkit-box-orient:horizontal;
  width:110%;
  position: fixed;
  background: white;
}
button, v-btn,  {
    background: white;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    letter-spacing: 1px;
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    min-width: 140px;
    margin-top: 8px;
    color: #8b8c8d;
    cursor: pointer;
    border: 1px solid #DDDEDF;
    // text-transform: uppercase;
    transition: 0.1s all;
    font-size: 10px;
    outline: none;
    &:hover {
      border-color: mix(#DDDEDF, black, 90%);
      color: mix(#8b8c8d, black, 80%);
    }
  }
 </style>