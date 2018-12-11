const { Router } = require('Express')
const userModel = require('../db/models/user');
const postModel = require('../db/models/post');


const router = Router()
//getUserInfo
router.get("/:userId", function(req, res) {
    console.log(":8000/user/:userId");
    var userId = req.params.userId;

    userModel.findOne({"userId": userId}, function(err, user) {
        console.log(user);
        res.send(user);
     });
});

//getUserPosts
router.get("/:userId/posts", function(req, res) {
    console.log(":8000/user/:userId/posts");
    var userId = req.params.userId;

    postModel.find({"userId": userId}, function(err, posts) {
        console.log(posts);
        res.send(posts);
     });
});

//checkFollowing
router.get("/:userId/follow", function(req, res) {
    console.log(":8000/user/:userId/follow");
    var userId = req.params.userId;

    userModel.find({"userId": userId}, function(err, following) {
        console.log(following);
        res.send(following);
     }).select("following");
});

//doFollow
router.post("/follow", function(req, res) {
    console.log(":8000/user/follow");
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

//undoFollow
router.post("/unFollow", function(req, res) {
    console.log(":8000/user/unFollow");
    var follow = req.body.follow;
    var beFollowed = req.body.beFollowed;
    var idx = -1;

    userModel.findOne({"userId": follow}, function(err, follower) {
        console.log(follower);
        idx = follower.following.indexOf(beFollowed);
        follower.following.splice(idx, 1);
        follower.save();
        userModel.findOne({"userId": beFollowed}, function(err, followee) {
            console.log(followee);
            idx = followee.follower.indexOf(follow);
            followee.follower.splice(idx, 1);
            followee.save();
            res.end()
        });
    });
});
module.exports = router