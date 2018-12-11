const { mongoose, autoIncrement } = require('../mongo')

const contentSchema = new mongoose.Schema({
  
    postId: {
        type: Date,
        default: Date.now
    },
    userId: String,
    content: [],    //contentSchema
    like: Number,
    hashTag: [String],
    comment: [{userName: String, message: String}]
})

// // doctorId를 Auto Increment 필드로 지정
// doctorSchema.plugin(autoIncrement, {
//     model: 'Doctor',
//     field: 'doctorId',
//     startAt: 1
// })

module.exports = mongoose.model('Post', contentSchema)
