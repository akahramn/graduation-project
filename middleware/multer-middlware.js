const multer = require('multer')
const path = require('path');
const StudentService = require('../services/student-service')
const fs = require('fs')



    console.log('Fonksiyona girdi')
    const storage = multer.diskStorage({
        destination: async (req, file, cb) => {
            console.log(req.params.studentId)
            const student = await StudentService.findBy('_id', req.params.studentId)
            const dir = `./public/labeled-images/${student[0].name} ${student[0].lastname}-${student[0].studentNo}`
            fs.exists(dir, exist => {
                if(!exist) {
                    return fs.mkdir(dir, error => cb(error, dir))
                }
                return cb(null, dir)
            })
        },
         
        filename: (req, file, cb) => {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }    
    })
    console.log('storage oluşturuldu')
    
    const upload = multer({
        storage: storage
    }).single('myImage')    
    
    console.log('image upload')



module.exports = upload
