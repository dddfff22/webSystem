<template>
  <div class="app">
      <div class="header">
        <router-link to="/mainpage">MAIN</router-link> | 
        <form>
          <input type="text" name="searchValue" v-model="searchValue">
          <router-link :to="{name: 'search', params: {searchValue: searchValue}}" tag="button">SEARCH</router-link> | 
        </form>
        <router-link :to="{name: 'user', params: {userId: currentUser}}">MYPAGE</router-link>
      </div>
    <div class="body">
      <router-view/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import Search from '@/views/Search.vue'

export default {
  name: 'app',
  data() {
    return {
      searchValue: "",
      currentUser: "shy625" //loginedUserId
    }
  }
}
</script>


<style>
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

</style>
