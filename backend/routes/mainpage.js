const { Router } = require('Express')
const userModel = require('../db/models/user');
const postModel = require('../db/models/post');
const multer = require('multer')
const path = require('path')
const UPLOAD_PATH = path.resolve(__dirname, 'C:/Users/dddff/tstagram/webSystem/backend/uploadedFiles')

var storage = multer.diskStorage({
   destination: function (req, file, cb) {
       cb(null, UPLOAD_PATH)
   },
   limits: {fileSize: 10000000, files: 5},
   filename: function (req, file, cb) {
       let ext = ''; // set default extension (if any)
       if (file.originalname.split(".").length>1) // checking if there is an extension or not.
           ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
       cb(null, Date.now() + ext)
   }
})

var upload = multer({ storage: storage });

const router = Router()

router.get("/get/:userId", function(req, res) {

    var userId = req.params.userId;
    var ans=[];

     userModel.find({"userId": userId },function(err, user) {
        console.log(user[0].following);
        user[0].following.push(req.params.userId);
        postModel.find({'userId':{"$in" : user[0].following}}).sort({postId: 'descending'}).exec(function(err, posts) {      
            console.log("11");
            ans.push.apply(ans, posts);
        console.log(ans);
        res.send(ans);
        });
      

    });

});

router.get("/addNewpost/:userId", function(req,res){
    var userId = req.params.userId;
    var userName;
    userModel.find({"userId": userId },function(err, user) {
        console.log("newpost");
        var post= new postModel();
        post.userName=user[0].userName;
        post.userId=user[0].userId
        post.save();
        console.log(post);
        res.send(post);
     });

});   

 
router.get("/image/:imagename",function(req,res){
   console.log(req);
   res.sendFile("C:/Users/dddff/tstagram/webSystem/backend/uploadedFiles/"+req.params.imagename);
});   

router.post("/upload/:objectID",upload.array('image',5),(req,res)=>{
    var str=req.params.objectID.split('-');
  console.log(str);
   postModel.findOne({"_id": str[0]}, function(err, post) {
      console.log("1");
      post.content.push({imagePath:"http://localhost:8000/mainpage/image/"+req.files[0].filename,imageContent:str[1]});
      console.log(post);
      post.save();
      });
});
router.post("/comentUpload",(req,res)=>{
    console.log(req.body.comment);
    console.log(req.body.objectID);
   postModel.findOne({"_id": req.body.objectId}, function(err, post) {
      console.log("1");
      post.comments.push({userName: req.body.userName, message: req.body.comment});
      console.log(post);
      post.save();
      });
});

router.post("/upFavorite",(req,res)=>{
    console.log(req.body.comment);
    console.log(req.body.objectID);
    postModel.findOne({"_id": req.body.objectId}, function(err, post) {
      console.log("1");
      post.comments.push({userName: req.body.userName, message: req.body.comment});
      console.log(post);
      post.save();
    });
});


module.exports = router