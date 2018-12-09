const { Router } = require('Express')
const userModel = require('../db/models/user');
const postModel = require('../db/models/post');


const router = Router()
router.get("/:searchValue", function(req, res) {
    console.log(":8000/search/:searchValue");
    var searchValue = req.params.searchValue;
    console.log(searchValue);
    var searchResult = [];

    userModel.find({"userName": {$regex: ".*" + searchValue + ".*", $options: "i"}},function(err, users) {
        console.log(users);
        searchResult[0] = users;

        postModel.find({"hashTag": {$regex: ".*" + searchValue + ".*", $options: "i"}},function(err, hashTags) {
            console.log(hashTags);
            searchResult[1] = hashTags;

            res.send(searchResult);
        }).select("hashTag");
    }).select("userId description");
});

module.exports = router