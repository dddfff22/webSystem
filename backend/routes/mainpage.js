const { Router } = require('Express')
const userModel = require('../db/models/user');
const postModel = require('../db/models/post');
const Image = require('../db/models//Image');
const multer = require('multer')
const path = require('path')
const UPLOAD_PATH = path.resolve(__dirname, 'D:/SHY/Documents/Backup/4-2/웹시설/팀프/project/webSystem/backend/uploadedFiles')

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
    console.log(req.url);
    var userId = req.params.userId;
     postModel.find({"userId": userId },function(err, posts) {
        console.log(posts);
        res.send(posts);
     });
});


router.get("/addNewpost/:userId", function(req,res){
    var userId = req.params.userId;
    postModel.find({"userId": userId },function(err, posts) {

        console.log("newpost");
        var post= new postModel();
        post.userName=posts[0].userName;
        post.userId=posts[0].userId
        post.save();
        console.log(post);
        res.send(post);

     });
});   


 
router.get("/image/:imagename",function(req,res){
   console.log(req);
   res.sendFile("D:/SHY/Documents/Backup/4-2/웹시설/팀프/project/webSystem/backend/uploadedFiles/"+req.params.imagename);
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


module.exports = router