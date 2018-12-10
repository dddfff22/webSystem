<template>
    <div>
        <div id="userInfo">
            <button v-on:click="doFollow">Follow</button>
        </div>
        <div id="posts">
        </div>
    </div>
</template>

<script>
export default {
    name: "userpage",
    data() {
        return {
            userName: String,
            userInfo,
            userPosts: Array
        }
    },
    created() {
        this.getUserInfo();
        this.getUserPosts();
    },
    methods: {
        getUserInfo: function() {
            console.log("getUserInfo");
            this.$http.get('http://localhost:8000/user/' + this.userName)
            .then((result) => {
                this.userInfo = result.data;
                console.log(this.userInfo);
            });
        },

        getUserPosts: function() {
            console.log("getUserPosts");
            this.$http.get('http://localhost:8000/user/' + this.userName + '/posts')
            .then((result) => {
                this.userPosts = result.data;
                console.log(this.userPosts);
            });
        },

        doFollow: function() {
            console.log("doFollow");
            this.$http.get('http://localhost:8000/user/' + this.userName + '/posts')
            .then((result) => {
                this.userPosts = result.data;
                console.log(this.userPosts);
            });
        }
    }
}
</script>
