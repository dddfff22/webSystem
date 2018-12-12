<template>
    <div id="userPage">
        <div id="userInfo">
            <div id="profileImg">
                <img alt="no image" src="../assets/default-image.jpg">
            </div>
            <div id="profile">
                <div>
                    <h1 id="userId">{{this.userInfo.userId}}</h1>
                    {{this.checkFollowing()}}
                    <span v-if="this.userId == this.currentUser">
                        <router-link :to="{name: 'edit', params: {userId: this.userId}}" tag="button">프로필 편집</router-link>
                    </span>
                    <span v-else-if="this.isFollowing"><button v-on:click="undoFollow">팔로우 취소</button></span>
                    <span v-else v-on:click="doFollow"><button>팔로우</button></span>

                    <!-- <router-link v-if="this.userId == this.currentUser" tag="button">프로필 편집</button>    loginedUserId -->
                    <!-- <button v-else-if="this.isFollowing" v-on:click="undoFollow">팔로우 취소</button> -->
                    <!-- <button v-else v-on:click="doFollow">팔로우</button> -->
                </div>
                <ul>
                    <li><span>게시물 <span class="listNum">{{this.userPosts.length}}</span></span></li>
                    <li><span>팔로워 <span class="listNum">{{this.userInfo.follower.length}}</span></span></li>
                    <li><span>팔로우 <span class="listNum">{{this.userInfo.following.length}}</span></span></li>
                </ul>
                <div>
                    <strong>{{this.userInfo.userName}}</strong>
                    <br>
                    <span>{{this.userInfo.description}}</span>
                </div>
            </div>
            <!-- {{this.userInfo}} -->
            <!-- <button v-on:click="doFollow">FOLLOW</button> -->
        </div>
        <hr>
        <div id="posts">
            {{this.userPosts}}
        </div>

    </div>
</template>

<script>
export default {
    name: "userpage",
    data() {
        return {
            currentUser: this.$session.get("auth").displayName,
            userId: this.$route.params.userId,
            userInfo: "",
            userPosts: Array,
            isFollowing: Boolean
        }
    },
    created() {
        this.setUserId();
        // this.getUserInfo();
        // this.getUserPosts();
    },
    watch: {
        "$route": "setUserId"
    },
    methods: {
        setUserId: function() {
            console.log("setUserId");
          this.userId = this.$route.params.userId;
          this.getUserInfo();
          this.getUserPosts();
        },

        getUserInfo: function() {
            console.log("getUserInfo");
            this.$http.get('http://localhost:8000/user/' + this.userId)
            .then((result) => {
                this.userInfo = result.data;
                console.log(this.userInfo);
            });
        },

        getUserPosts: function() {
            console.log("getUserPosts");
            this.$http.get('http://localhost:8000/user/' + this.userId + '/posts')
            .then((result) => {
                this.userPosts = result.data;
                console.log(this.userPosts);
            });
        },

        checkFollowing: function() {
            console.log("checkFollowing");
                this.$http.get('http://localhost:8000/user/' + this.currentUser + '/follow')   //loginedUserId
                .then((result) => {
                    console.log(result.data[0]);
                    console.log(result.data[0].following.includes(this.userId));
                    if(result.data[0].following.includes(this.userId)) {
                        this.isFollowing = true;
                    } else {
                        this.isFollowing = false;
                    }
                    // return result.data[0].following.includes("shy625");
                });
        },

        doFollow: function() {
            console.log("doFollow");
            this.$http.post('http://localhost:8000/user/follow', {
                follow: this.currentUser,  //loginedUserId
                beFollowed: this.userId
            })
            .then((result) => {
                console.log(result.data);
            });
        },

        undoFollow: function() {
            console.log("undoFollow");
            this.$http.post('http://localhost:8000/user/unFollow', {
                follow: this.currentUser,  //loginedUserId
                beFollowed: this.userId
            })
            .then((result) => {
                console.log(result.data);
            });
        }
    }
}
</script>

<style>
#userPage {
    margin: 50px 150px;
    padding: 10px
}

#userInfo {
    margin: 50px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

}

#profileImg {
    grid-column: 1 / 2;
}

#profile {
    grid-column: 2 / 4;
}

h1 {
    display: inline;
    margin-right: 50px;
}

ul li {
    list-style-type: none;
    display: inline;
    margin-right: 20px;
}

.listNum {
    font-weight: bold;
}

hr {
    width: 100%;
    color: gray    
}

#posts {
    margin: 50px auto;
}
</style>
