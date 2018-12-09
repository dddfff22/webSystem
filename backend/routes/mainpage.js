const { Router } = require('Express')
const userModel = require('../db/models/user');
const postModel = require('../db/models/post');


const router = Router()
router.get("/:userId", function(req, res) {
    console.log(req.url);
    var userId = req.params.userId;
     postModel.find({"userId": userId },function(err, posts) {
        console.log(posts);
        res.send(posts);
     });
}); 


module.exports = router