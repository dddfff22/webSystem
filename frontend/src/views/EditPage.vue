<template>
    <div id="editPage">
        <h1>{{this.userInfo.userId}}</h1>
        <div>
            {{this.profileImg}}
            <img alt="no image" v-bind:src="profileImgSrc">
            <br>
            <input type="file" @change="onFileChanged">
            <button @click="onUpload">프로필 사진 변경</button>
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
import firebase,{ functions } from 'firebase'

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
            },
            selectedFile: "",
            profileImgSrc: ""
        }
    },
    created() {
        this.setUserId();
        this.getProfileImgPath();
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
            });
            alert("저장 완료");

        },

        onFileChanged: function(event) {
            console.log("onFileChanged");
            this.selectedFile = event.target.files[0];
            console.log(this.selectedFile);
        },
        
        onUpload: function() {
            console.log("onUpload");
            var data = new FormData();
            data.append('image', this.selectedFile);
            console.log(data);
            this.$http.post('http://localhost:8000/user/upload/' + this.userInfo.userEmail, data)
            .then(result => {
                this.getProfileImgPath();
            });
        },
        
        getProfileImgPath: function() {
            console.log("getProfileImgPath");
            this.$http.get('http://localhost:8000/user/' + this.userId)
            .then((result) => {
                var profileImgName = result.data.profileImg;
                console.log(profileImgName);
                if(profileImgName == undefined) {
                    console.log("no image");
                    this.profileImgSrc = "http://localhost:8000/user/image";
                } else {
                    this.profileImgSrc = "http://localhost:8000/user/image/" + this.userId;
                }
                // if(result.data > 0) {
                    // this.profileImgSrc = "http://localhost:8000/user/image/" + this.userId;
                // }
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
