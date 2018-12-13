const { mongoose, autoIncrement } = require('../mongo')

const userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        unique: true, 
    },
    userId: {
        type: String,
        unique: true
    },
    // password: String, firebase에서 관리
    userName: String,
    profileImg: String,
    description: String,
    following: [String],
    follower: [String]
})

// // doctorId를 Auto Increment 필드로 지정
// doctorSchema.plugin(autoIncrement, {
//     model: 'Doctor',
//     field: 'doctorId',
//     startAt: 1
// })

module.exports = mongoose.model('User', userSchema)
