const { Router } = require('Express')
const userModel = require('../db/models/user');
const postModel = require('../db/models/post');


const router = Router()
//getTaggedPosts
router.get("/:tagValue/posts", function(req, res) {
    console.log(":8000/hashtag/:tagValue/posts");
    var tagValue = req.params.tagValue;

    postModel.find({"hashTags": tagValue}, function(err, posts) {
        console.log(posts);
        res.send(posts);
     });
});

module.exports = router