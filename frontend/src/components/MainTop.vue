<template>
  <div class="main-top">
      <div class="topbox ">
        <div class="searchbox">
          <input type="text" v-model="message" placeholder="검색">
          </div>
        <div class="personpage">
          <h1>개인 페이지</h1>

        </div>  
      </div>
</div>
</template>


<script>

export default {
  name: 'MainTop',
  props: {
    
    msg: String

  }
}

</script>


<style>
#app {
 -webkit-box-ordinal-group:3;
 -webkit-order:2;
 -ms-flex-order:2;
 order:2;
 background-color:#fafafa;
 
 padding:0;
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

.serachbox{
  -webkit-box-align:center;
  -webkit-align-items:center;
  -ms-flex-align:center;
  align-items:center; 
  display:-webkit-box; 
  border:2px solid gray;

}

</style>
