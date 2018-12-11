<template>
    <div>
        <div id="userInfo">
            {{this.userInfo}}
            <button v-on:click="doFollow">FOLLOW</button>
        </div>
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
            userPosts: Array
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

        doFollow: function() {
            console.log("doFollow");
            this.$http.post('http://localhost:8000/user/follow', {
                follow: "aaa",
                beFollowed: this.userId
            })
            .then((result) => {
                console.log(result.data);
            });
        }
    }
}
</script>
