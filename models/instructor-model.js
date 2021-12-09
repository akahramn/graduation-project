const mongoose = require('mongoose')


const InstructorSchema = new mongoose.Schema({
    name: { type: String },
    lastname: { type: String }
})

module.exports = mongoose.model('Instructor', InstructorSchema)