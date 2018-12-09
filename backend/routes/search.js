const { Router } = require('Express')
const userModel = require('../db/models/user');
const postModel = require('../db/models/post');


const router = Router()
router.get("/:searchValue", function(req, res) {
    console.log(":8000/search/:searchValue");
    var searchValue = req.params.searchValue;

    userModel.find({"userName": {$regex: ".*" + searchValue + ".*", $options: "i"}},function(err, users) {
        console.log(users);
        res.send(users);
     }).select("userName description");

     postModel.find({"userName": {$regex: ".*" + searchValue + ".*", $options: "i"}},function(err, hashTags) {
        console.log(hashTags);
        res.send(hashTags);
     }).select("hashTag");

/////////////////////////
    // userModel.find(function(err, res) {
// 
    // }).where("userName").regex(".*" + searchValue + ".*").select("userName description");
/////////////////////////
// userModel.find({"userName": /.*searchValue.*/}, {"userId": false, "password": false, "userName": true, "description": true, "following": false, "follower": false}, function(err, res) {
// 
    // });
    

    // res.send();
}); 
// router.post('/register', (req, res) => {
//     res.send('Hello World!\n');
// });
// router.get('/call/:doctorName', (req, res) => {
//     res.send('Hello World!\n');
// });
// router.get('/done/:patientId', (req, res) => {
//     res.send('Hello World!\n');
// });
// router.get('/list', (req, res) => {
//     res.send('Hello World!\n');
// });


module.exports = router