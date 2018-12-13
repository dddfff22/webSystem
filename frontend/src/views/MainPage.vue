<template>
  <div class="mainpage"> 
        
      <button @click="addNewPost">새로운 게시글 추가하기</button>
      <div v-for= "searchResultwithUserId in searchResultwithUserIds">
      <main-body :id="searchResultwithUserId.userId"  :link="img" :contents="searchResultwithUserId.content" :objectId="searchResultwithUserId._id" :comments="searchResultwithUserId.comments" :userName="searchResultwithUserId.userName" :likeUser="searchResultwithUserId.likeUser"/>
      </div>
  
  </div>
</template>

<script>
import MainBody from '@/components/MainBody.vue'

export default {
  name: 'mainpage',
  components: {
    MainBody
  },
  data(){
    return{
      userId : "dddfff22",
      searchResultwithUserIds: [],
      loading:'1',
      img: "/img/logo.82b9c7a5.png",
      selectedFile: null
    }
    },created() {     
      let auth = JSON.parse(this.$localStorage.get('auth'))
    
         console.log("search");
         this.$http.get('http://localhost:8000/mainpage/get/'+ auth.displayName)
    .then((result) => {
        this.searchResultwithUserIds = result.data;
        console.log(this.searchResultwithUserIds);
      });
  },methods:{
   handleSubmit(e) {
     console.log('posts');
    let data = new FormData()
    data.append('image', e.target.files[0])
    this.userId=this.$session.get("auth").displayName;
    console.log(e.target.files[0]);
    this.$http.post('http://localhost:8000/mainpage/upload/', data)
        .then(resp => {
         this.imagePath = resp.data.path
   });
  },
  addNewPost(){
    console.log("add");
    console.log(this.userId);
      this.$http.get('http://localhost:8000/mainpage/addNewpost/'+this.userId)
        .then(resp => {
         cosole.log(posts);
   });
  }
  }
  
}
</script>

<style>
.mainpage {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center; 
  color: #2c3e50;
  margin-top: 60px;

}
</style>
