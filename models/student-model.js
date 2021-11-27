require('mongoose')


const StudentSchema = new mongoose.Schema({
    name: { type: String },
    lastname: { type: String },
    studentNo: { type: String },
    image: { type: String }  

})


module.exports = mongoose.model('Student', StudentSchema)