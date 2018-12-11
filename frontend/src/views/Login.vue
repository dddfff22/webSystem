<template>
  <div class="login">
    <div v-bind:style="{display: displaylogin}">
        <h3>LogIn</h3>
            <img alt="Vue logo" src="../assets/logo.png">
        <v-form>
        <v-text-field type="text" v-model="input.email" placeholder="Email"></v-text-field>
        <v-text-field type="password" v-model="input.password" placeholder="Password"></v-text-field>
        </v-form>
        <br/>
        <v-btn @click="signIn">LogIn</v-btn>
        <modals-container />
        <div>
            <br />
            <v-btn @click="signUp">signUp</v-btn>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import signUp from './SignUp.vue'

export default {
  name: 'login',
  data(){
    return{
      input: {
        email: '',
        password: '',
      },
      displaylogin: 'block',
      displaysignUp: 'none',
    }
  },
  components: {
    signUp
  },
  methods: {
    signIn(){
      firebase
        .auth()
        .signInWithEmailAndPassword(this.input.email, this.input.password)
        .then(
          (user) => {
            this.$session.set('auth', firebase.auth().currentUser);
            this.$router.push({ name: "usermain" })
            // console.log(this.$session.get('auth'))
            // console.log(firebase.auth().currentUser.providerData)
            // console.log("log in successed")
            location.reload();
          },
          (err)=> {
            alert(err.message)
          }
        )
    },
    signUp(){
      this.$modal.show(signUp,{
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
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
