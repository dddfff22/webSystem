const { Router } = require('Express')
const userModel = require('../db/models/user');
const postModel = require('../db/models/post');


const router = Router()
router.get("/:userName", function(req, res) {
    console.log(":8000/user/:userName");
    var userName = req.params.userName;

    userModel.findOne({"userName": userName}, function(err, user) {
        console.log(user);
        res.send(user);
     });
});

router.get("/:userName/posts", function(req, res) {
    console.log(":8000/user/:userName/posts");
    var userName = req.params.userName;

    postModel.find({"userName": userName}, function(err, posts) {
        console.log(posts);
        res.send(posts);
     });
});

router.get("/:userName/follow", function(req, res) {
    console.log(":8000/user/:userName/follow");
    var userName = req.params.userName;

    postModel.find({"userName": userName}, function(err, posts) {
        console.log(posts);
        res.send(posts);
     });
});

module.exports = router