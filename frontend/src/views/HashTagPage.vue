<template>
    <div>
        <div id="userInfo">
            <div id="profileImg"></div>
            <section id="profile">
                <div>
                    <h1 id="userId">{{this.userInfo.userId}}</h1>
                </div>
            </section>
        </div>
        <hr>
        <div id="posts">
            {{this.taggedPosts}}
        </div>

    </div>
</template>

<script>
export default {
    name: "hashTagPage",
    data() {
        return {
            // currentUser: this.$session.get("auth").displayName,
            tagValue: this.$route.params.tagValue,
            taggedPosts: Array,
        }
    },
    created() {
        this.setTagValue();
    },
    watch: {
        "$route": "setTagValue"
    },
    methods: {
        setTagValue: function() {
            console.log("setTagValue");
          this.tagValue = this.$route.params.tagValue;
          this.getTaggedPosts();
        },

        getTaggedPosts: function() {
            console.log("getTaggedPosts");
            this.$http.get('http://localhost:8000/hashtag/' + this.tagValue + '/posts')
            .then((result) => {
                this.taggedPosts = result.data;
                console.log(this.taggedPosts);
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
