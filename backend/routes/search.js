const { Router } = require('Express')
const userModel = require('../db/models/user');
const postModel = require('../db/models/post');
const tagModel = require('../db/models/tag');


const router = Router()
//search
router.get("/:searchValue", function(req, res) {
    console.log(":8000/search/:searchValue");
    var searchValue = req.params.searchValue;
    console.log(searchValue);
    var searchResult = [];

    userModel.find({"userId": {$regex: ".*" + searchValue + ".*", $options: "i"}},function(err, users) {
        console.log(users);
        searchResult[0] = users;

        tagModel.find({"hashTag": {$regex: ".*" + searchValue + ".*", $options: "i"}},function(err, hashTags) {
            console.log(hashTags);
            searchResult[1] = hashTags;
            
            res.send(searchResult);
        }).select("hashTag");
    }).select("userId userName");
});

module.exports = router