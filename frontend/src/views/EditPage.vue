<template>
    <div id="editPage">
        <h1>{{this.userInfo.userId}}</h1>
        <div>
            <img alt="no image" src="../assets/default-image.jpg">
            <br>
            <input type="file">
            <button>프로필 사진 변경</button>
        </div>
        <div>
            사용자 계정 <input type="text" name="userId" v-model="userInfo.userId">
        </div>
        <div>
            사용자 이름 <input type="text" name="userName" v-model="userInfo.userName">
        </div>
        <div>
            소개 <textarea rows="5" cols="50" name="description" v-model="userInfo.description">
            
            </textarea>
        </div>
        <button v-on:click="saveUserInfo">저장</button>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: "editPage",
    data() {
        return {
            userId: this.$route.params.userId,
            // userInfo: "",
            userInfo: {
                userEmail: String,
                userId: String,
                userName: String,
                description: String
            }
        }
    },
    created() {
        this.setUserId();
    },
    methods: {
        setUserId: function() {
            console.log("setUserId");
            this.userId = this.$route.params.userId;
            this.getUserInfo();
        },

        getUserInfo: function() {
            console.log("getUserInfo");
            this.$http.get('http://localhost:8000/user/' + this.userId)
            .then((result) => {
                this.userInfo.userEmail = result.data.userEmail;
                this.userInfo.userId = result.data.userId;
                this.userInfo.userName = result.data.userName;
                this.userInfo.description = result.data.description;
                console.log(this.userInfo);
            });
        },

        saveUserInfo: function() {
            console.log("saveUserInfo");
            this.$http.post('http://localhost:8000/user/save', {
                newUserInfo: this.userInfo
            })
            .then((result) => {
                console.log(result.data);
                firebase.auth().currentUser.updateProfile({displayName: this.userInfo.userId});
                this.$localStorage.remove('auth');
                this.$sessionStorage.set('auth', firebase.auth().currentUser);
                alert("저장 완료");
            });
        }
    }
}
</script>

<style>
#editPage {
    margin: 50px 150px;
    padding: 10px
}

</style>
