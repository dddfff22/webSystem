<template>
  <div class="main-page"> 
      <div v-for= "searchResultwithUserId in searchResultwithUserIds">
      <main-body :id="searchResultwithUserId.userId"  :link="img" :content="searchResultwithUserId.content"/>
      </div>
  </div>
</template>
<script>
import MainBody from '@/components/MainBody.vue'

export default {

  name: 'mainpage',
  components: {
    MainBody
  },data(){
    return{
      userId : "dddfff22",
      searchResultwithUserIds: [],
      loading:'1',
      img: "/img/logo.82b9c7a5.png"
    }
    },created() {     
         console.log("search");
     this.$http.get('http://localhost:8000/mainpage/'+this.userId)
    .then((result) => {
        this.searchResultwithUserIds = result.data;
        console.log(this.searchResultwithUserIds);
      });
  },methods:{
    
    
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
