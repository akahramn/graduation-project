const { Mongoose } = require('mongoose')

require('mongoose')

const InstructorSchema = new Mongoose.Schema({
    name: { type: String },
    lastname: { type: String }
})

module.exports = new Mongoose.model('Instructor', InstructorSchema)