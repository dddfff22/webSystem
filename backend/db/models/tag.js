const { mongoose, autoIncrement } = require('../mongo')

const tagSchema = new mongoose.Schema({
    hashTag: {
        type: String,
        unique: true
    }
})

// // doctorId를 Auto Increment 필드로 지정
// doctorSchema.plugin(autoIncrement, {
//     model: 'Doctor',
//     field: 'doctorId',
//     startAt: 1
// })

module.exports = mongoose.model('Tag', tagSchema)
