const { Router } = require('Express')
const userModel = require('../db/models/user');
const postModel = require('../db/models/post');
const Image = require('../db/models//Image');
const multer = require('multer')
const path = require('path')
const UPLOAD_PATH = path.resolve(__dirname, 'D:/SHY/Documents/Backup/4-2/웹시설/팀프/project/webSystem/backend/uploadedFiles')
const upload = multer({
  dest: UPLOAD_PATH,
  limits: {fileSize: 10000000, files: 5}
})
const router = Router()


router.get("/get/:userId", function(req, res) {
    console.log(req.url);
    var userId = req.params.userId;
     postModel.find({"userId": userId },function(err, posts) {
        console.log(posts);
        res.send(posts);
     });
}); 


router.get("/image",function(req,res){
   res.sendFile("D:/SHY/Documents/Backup/4-2/웹시설/팀프/project/webSystem/backend/uploadedFiles/5ec034737c6962b6ad74638e6d3ba4a6");
});

router.post("/upload",upload.array('image',5),(req,res)=>{
   console.log('up');
   const images = req.files.map((file) => {
      return {
        filename: file.filename,
        originalname: file.originalname
      }
    });
    Image.insertMany(images, (err, result) => {
      if (err) return res.sendStatus(404)
      res.json(result)
    });
});


module.exports = router