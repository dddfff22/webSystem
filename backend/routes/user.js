const { Router } = require('Express')
const userModel = require('../db/models/user');
const postModel = require('../db/models/post');


const router = Router()
router.get("/:userId", function(req, res) {
    console.log(":8000/user/:userId");
    var userId = req.params.userId;

    userModel.findOne({"userId": userId}, function(err, user) {
        console.log(user);
        res.send(user);
     });
});

router.get("/:userId/posts", function(req, res) {
    console.log(":8000/user/:userId/posts");
    var userId = req.params.userId;

    postModel.find({"userId": userId}, function(err, posts) {
        console.log(posts);
        res.send(posts);
     });
});

router.post("/follow", function(req, res) {
    console.log(":8000/user/:userId/follow");
    var follow = req.body.follow;
    var beFollowed = req.body.beFollowed;

    userModel.findOne({"userId": follow}, function(err, follower) {
        console.log(follower);
        follower.following.push(beFollowed);
        follower.save();
        userModel.findOne({"userId": beFollowed}, function(err, followee) {
            console.log(followee);
            followee.follower.push(follow);
            followee.save();
            res.end()
        });
    });
});

module.exports = router