const mongoose = require('mongoose')


const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    studentNo: { type: String, required: true },
    image: { type: String }  

})


module.exports = mongoose.model('Student', StudentSchema)