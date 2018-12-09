<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> | -->
      <!-- <router-link to="/about">About</router-link> | -->
      <router-link to="/mainpage">MainPage</router-link> |
      <form>
        <input type="text" name="searchValue" v-model="searchValue">
        <router-link :to="{name: 'search', params: {searchValue: searchValue}}" tag="button">SEARCH</router-link>
      </form>
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
