<template>

  <div class="main-body">
  <div class="idbox">
    <h1>{{id}}</h1>
      <modals-container />
      

  </div>
    <input type="file" id="wizard-picture"  @change="change($event)">
    <input type="text" v-model="message">
    <button @click="handleSubmit">제출</button>
  <div v-for= "content in contents" class="image">
    <img style='height: 100%; width: 100%; object-fit: contain' v-bind:src="content.imagePath"/>
    <h1>{{content.imageContent}}</h1>
  </div>

  <span v-show="this.favorite">
    <button @click="click()"><img src="../assets/redheart.png"/></button>
  </span>
  <span v-show="this.favorite==false"> <button @click="click()"><img src="../assets/emptyheart.png"/></button></span>

  <div class="etc">
    <div class="comentList" v-for="comment in comments">
        <h1>{{comment.userName}} : {{comment.message}}</h1>
    </div>
    <div class="inputComment">
      <input type="text" v-model="userInput">
       <button @click="commetSubmit">제출</button>
    </div>
    
  </div>
  </div>
</template>


<script>

import contentList from './contentList.vue'
export default {
  name: 'MainBody',
  props: {
    msg: String,
    id:String,
    link:String,
    contents:[],
    comments:[],
    objectId:String,
    hashTags:[],
    likeUser:[]
  },  components: {
    contentList
  },
  created(){
    let auth = JSON.parse(this.$localStorage.get('auth'))
    userName= auth.displayName;
    for(var i=0;i<likeUser.length;i++){
        if(this.likeUser[i].userId== this.auth.displayName){
          this.favorite=true;
        }
    }
  }, data(){
    return{
      file:"",
      message:"",
      split:"-",
      userInput:"",
      userName: auth.displayName,
      favorite:false
    }
  },
  methods: {
    change(e){
      this.file=e.target.files[0]
    },
    handleSubmit () {
     console.log(this.file);
    let data = new FormData()
    data.append('image', this.file)
    this.$http.post('http://localhost:8000/mainpage/upload/'+this.objectId+"-"+this.message, data)
        .then(resp => {
   });
  },commetSubmit () {
     console.log(JSON.parse(this.$localStorage.get('auth')).displayName);
    let data = new FormData()
    data.append('image', this.file)
    this.$http.post('http://localhost:8000/mainpage/comentUpload/',{
          comment:this.userInput,
          objectId:this.objectId,
          userName:JSON.parse(this.$localStorage.get('auth')).displayName
    });
  }, postEventData() {
            console.log('11');
      },
      click(){
                    console.log("click");
                    if(this.favorite==true){ 
                      this.favorite=false;                   
                    }else{
                        this.favorite=true;
                    }
                },addFavorite(){
      console.log("favorite");
      
  },contenstUp(){
      console.log('1');
      this.$modal.show(contentList,{
        hot_table : 'data',
        modal : this.$modal },{
        name: 'dynamic-modal',
        width : '656',
        height : '340',
        draggable: false,
       
            })
        // this.displaylogin = 'none'
        // this.displaysignUp = 'block'
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
  margin-top: 100px;

}
.main-body{
  border:2px solid gray;
 margin:10px
}
.image{
   border:2px solid gray;
  margin:10px
}
</style>
