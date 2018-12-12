<template>
  <div class="app">
      <div class="header">
        <div class="in_header" >
          <div class="mainlogo">
            <router-link to="/mainpage"><img src="../assets/Tstagram_main_logo.png"></router-link> 
          </div>
          <div class="div_search">
            <form>
              <input type="text" placeholder="검색" name="searchValue" v-model="searchValue" style="width:200px, margin : 0 0 10px 10px; ">
              <router-link :to="{name: 'search', params: {searchValue: searchValue}}" tag="button">SEARCH</router-link>
            </form>
          </div>
          <div class="btn_mypage">
            <router-link :to="{name: 'user', params: {userId: currentUser}}"><img src="../assets/mypage_btn_img.png"></router-link>
          </div>
          <div class="btn_logout">
            <v-btn @click="Logout">Logout</v-btn>
          </div>
        </div>
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
input {
  margin: auto auto;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
}
input::placeholder{
  color: #8b8c8d;
  text-align: center;
}
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mainlogo{
  float: left;
  // margin-left: 0;
  // margin-right: 80px;
  // padding: 0px 10px;
  grid-column: 1 / 2;
} 
.div_search{
  float: left;
  // padding: 0px 10px;
  // margin-left:20px;
  // margin-right: 80px;
  grid-column: 2 / 3;
}
.btn_mypage{
  float: left;
  // padding: 0px 10px;
  // margin-left:20px;
  // margin-right: 80px;
  grid-column: 3 / 4;
}
.btn_logout{
  float: right;
  // margin-left:40px;
  // padding: 0px 20px;
  grid-column: 4 / 5;
}
.in_header{
  margin: auto auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
 .header {
  height: 77px;
  -webkit-box-align:center;
  -webkit-align-items:center;
  -ms-flex-align:center;
  align-items:center; 
  display:-webkit-box; 
  top: 0;
  left: 0;
  margin: 0;
  padding: 10px 20px;
  border:0.5px solid #b2beb5;
  -webkit-box-orient:horizontal;
  width:100%;
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