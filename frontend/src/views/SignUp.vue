<template>
<div class="signUp" name="signUp" transition="pop-out" :width="modalWidth" :height="440">
  <div class="box">
    <div class="box-part" id="bp-left">
      <div class="partition" id="partition-register">
        <div class="partition-title">SIGN UP</div>
        <div class="partition-form">
          <form autocomplete="false">

            <div class="autocomplete-fix">
              <input type="password">
            </div>
            <input id="n-useremail" type="text" v-model="email" placeholder="Email">
            <input id="n-userid" type="text" v-model="userId" placeholder="ID">
            <input id="n-username" type="text" v-model="userName" placeholder="name">
            <input id="n-password2" type="password" v-model="password" placeholder="Password">
          </form>

          <div style="margin-top: 42px">
          </div>

          <div class="button-set">
            <button id="goto-signUp-btn" @click="SignUp">Sign Up</button>
          </div>

          <!-- <button class="large-btn github-btn">connect with <span>github</span></button>
          <button class="large-btn facebook-btn">connect with <span>facebook</span></button> -->
        </div>
      </div>
    </div>
    <div class="box-part" id="bp-right">
      <div class="box-messages">
        aaa
      </div>
    </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase'

const MODAL_WIDTH = 656
export default {
  name: 'DemoLoginModal',
  data () {
    return {
      modalWidth: MODAL_WIDTH,
      email: '',
      userId: '',
      userName: '',
      password: '',
    }
  },
  methods: {
    SignUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then((user) => {
            console.log(user)
            firebase.auth().currentUser.updateProfile({displayName: this.userId});
            this.$http.post('http://localhost:8000/signup', {
                userEmail: this.email,
                userId: this.userId,
                userName: this.userName,
            })
            alert("회원가입이 완료 되었습니다.")
            this.$emit('close');
        })
        .catch((error) => {
          console.log(error)
        })
        this.$emit('close')
    },
    Close() {
      this.$emit('close')
    }
  },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH
      ? MODAL_WIDTH / 2
      : MODAL_WIDTH
  }
}
</script>

<style lang="scss">
$background_color: #404142;
$github_color: #DBA226;
$facebook_color: #3880FF;
.box {
  background: white;
  overflow: hidden;
  width: 656px;
  height: 400px;
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: 0 0 40px black;
  color: #8b8c8d;
  font-size: 0;
  .box-part {
    display: inline-block;
    position: relative;
    vertical-align: top;
    box-sizing: border-box;
    height: 100%;
    width: 50%;
    &#bp-right {
      background: url("../assets/Tstagram_logo.png") no-repeat top left;
      border-left: 1px solid #eee;
    }
  }
  .box-messages {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .box-error-message {
    position: relative;
    overflow: hidden;
    box-sizing: border-box;
    height: 0;
    line-height: 32px;
    padding: 0 12px;
    text-align: center;
    width: 100%;
    font-size: 11px;
    color: white;
    background: #F38181;
  }
  .partition {
    width: 100%;
    height: 100%;
    .partition-title {
      box-sizing: border-box;
      padding: 30px;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      font-size: 20px;
      font-weight: 300;
    }
    .partition-form {
      padding: 0 20px;
      box-sizing: border-box;
    }
  }
  input[type=password],
  input[type=text] {
    display: block;
    box-sizing: border-box;
    margin-bottom: 4px;
    width: 100%;
    font-size: 12px;
    line-height: 2;
    border: 0;
    border-bottom: 1px solid #DDDEDF;
    padding: 4px 8px;
    font-family: inherit;
    transition: 0.5s all;
    outline: none;
  }
  button {
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
  .large-btn {
    width: 100%;
    background: white;
    span {
      font-weight: 600;
    }
    &:hover {
      color: white !important;
    }
  }
  .button-set {
    text-align: center;
    margin-bottom: 8px;
  }
  #register-btn,
  #signin-btn {
    margin-left: 8px;
  }
  .facebook-btn {
    border-color: $facebook_color;
    color: $facebook_color;
    &:hover {
      border-color: $facebook_color;
      background: $facebook_color;
    }
  }
  .github-btn {
    border-color: $github_color;
    color: $github_color;
    &:hover {
      border-color: $github_color;
      background: $github_color;
    }
  }
  .autocomplete-fix {
    position: absolute;
    visibility: hidden;
    overflow: hidden;
    opacity: 0;
    width: 0;
    height: 0;
    left: 0;
    top: 0;
  }
}
.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}
.pop-out-enter,
.pop-out-leave-active {
  opacity: 0;
  transform: translateY(24px);
}
</style>