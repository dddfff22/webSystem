const { Router } = require('Express')
const userModel = require('../db/models/user');
const postModel = require('../db/models/post');
const multer = require('multer');
const path = require('path');

const UPLOAD_PATH = path.resolve(__dirname, 'D:/SHY/Documents/Backup/4-2/웹시설/팀프/project/webSystem/backend/uploadedFiles/profileImgs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_PATH)
    },
    limits: {fileSize: 10 * 1024 * 1024},
    filename: function (req, file, cb) {
        cb(null, new Date().valueOf() + path.extname(file.originalname));
    }
})
var upload = multer({ storage: storage });

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

//saveUserInfo
router.post("/save", function(req, res) {
    console.log(":8000/user/save");
    var newUserInfo = req.body.newUserInfo;

    userModel.findOne({"userEmail": newUserInfo.userEmail}, function(err, user) {
        console.log(user);
        user.userId = newUserInfo.userId;
        user.userName = newUserInfo.userName;
        user.description = newUserInfo.description;
        user.save();
        res.end();
    });
});

//onUpload
router.post("/upload/:userEmail", upload.single('image'), function(req, res) {
    console.log(":8000/user/upload");
    var userEmail = req.params.userEmail;
    console.log(userEmail);

    userModel.findOne({"userEmail": userEmail}, function(err, user) {
        console.log(user);
        console.log(req.file);
        user.profileImg = req.file.filename;
        user.save();
        res.end();
     });
});

//getProfileImgPath
router.get("/image/:userId",function(req,res) {
    console.log(":8000/user/image/:userId");
    var userId = req.params.userId;

    userModel.findOne({"userId": userId}, function(err, user) {
        console.log(user);
        res.sendFile("D:/SHY/Documents/Backup/4-2/웹시설/팀프/project/webSystem/backend/uploadedFiles/profileImgs/" + user.profileImg);
    }).select("profileImg");
 });

//getDefaultImg
router.get("/image",function(req,res) {
    console.log(":8000/user/image");

    res.sendFile("D:/SHY/Documents/Backup/4-2/웹시설/팀프/project/webSystem/frontend/src/assets/default-image.jpg");
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