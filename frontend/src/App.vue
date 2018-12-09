<template>
  <div id="app">
         <div id="nav">
      <div class="topbox ">
         <router-link :to="{name: 'mainpage'}" tag="button">main</router-link>
        <div class="searchbox">
          <form>
        <input type="text" name="searchValue" v-model="searchValue">
        <router-link :to="{name: 'search', params: {searchValue: searchValue}}" tag="button">SEARCH</router-link>
      </form>
          </div>
        <div class="personpage">
          <h1>개인 페이지</h1>
        </div>  
      </div>
</div>
    <div class="body">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> | -->    
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      searchValue: String
    }
  },
  compomnets:{

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

.topbox{
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
