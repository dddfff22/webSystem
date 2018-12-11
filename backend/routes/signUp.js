const { Router } = require('Express')
const userModel = require('../db/models/user');


const router = Router()

router.post('/', (req, res) => {
    console.log("in backend")
    var user = new userModel();
    user.userEmail = req.body.userEmail;
    user.userId = req.body.userId;
    user.userName = req.body.userName;
    user.save();
    res.send(user);
     
})

module.exports = router