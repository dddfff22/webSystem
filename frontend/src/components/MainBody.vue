<template>
  <div class="main-body">
  <div class="idbox">
      <input type="file" id="wizard-picture"  @change="change($event)">
      <button @click="handleSubmit">제출</button>
    <h1>{{id}}</h1>
  </div>
  <h1>{{objectId}}</h1>
  <div v-for= "content in contents" class="image">
    <img v-bind:src="content.imagePath"/>
  </div>

  <div class="content">
    <div v-for= "content in contents">
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'MainBody',
  props: {
    msg: String,
    id:String,
    link:String,
    contents:[],
    objectId:String,
    hashTags:[],
  },
  data(){
    return{
      file:""
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
    this.$http.post('http://localhost:8000/mainpage/upload'+this.objectId , data)
        .then(resp => {
         this.imagePath = resp.data.path
   });
  },postEventData() {
            console.log('11');
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
  margin-top:10px
}

</style>
