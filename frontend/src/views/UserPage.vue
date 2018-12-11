<template>
    <div>
        <div id="userInfo">
            <div id="profileImg"></div>
            <section id="profile">
                <div>
                    <h1 id="userId">{{this.userInfo.userId}}</h1>
                    {{this.checkFollowing()}}
                    <button v-if="this.userId == 'aaa'" >프로필 편집</button>    <!--loginedUserId-->
                    <button v-else-if="this.isFollowing" v-on:click="undoFollow">팔로우 취소</button>
                    <button v-else v-on:click="doFollow">팔로우</button>
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
            </section>
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
                this.$http.get('http://localhost:8000/user/' + "aaa" + '/follow')   //loginedUserId
                .then((result) => {
                    console.log(result.data[0]);
                    console.log(result.data[0].following.includes("shy625"));
                    if(result.data[0].following.includes("shy625")) {
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
                follow: "aaa",  //loginedUserId
                beFollowed: this.userId
            })
            .then((result) => {
                console.log(result.data);
            });
        },

        undoFollow: function() {
            console.log("undoFollow");
            this.$http.post('http://localhost:8000/user/unFollow', {
                follow: "aaa",  //loginedUserId
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
#userInfo {
    margin: 50px auto;
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
    width: 80%;

    color: gray    
}

#posts {
    margin: 50px auto;
}
</style>
