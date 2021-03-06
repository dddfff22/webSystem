const { mongoose, autoIncrement } = require('../mongo')

const postSchema = new mongoose.Schema({
    userName: String,
    postId: {
        type: Date,
        default: Date.now
    },
    userId: String,
    content: [{imagePath:String,imageContent:String}],    //contentSchema
    like: Number,
    likeUser:[{userId:String,userName:String}],
    hashTags: [String],
    comments: [{userName: String, message: String}]
})


// // doctorId를 Auto Increment 필드로 지정
// doctorSchema.plugin(autoIncrement, {
//     model: 'Doctor',
//     field: 'doctorId',
//     startAt: 1
// })

module.exports = mongoose.model('Post', postSchema)
