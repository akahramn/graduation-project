const multer = require('multer')



    console.log('Fonksiyona girdi')
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, './img')
        },
        filename: (req, file, cb) => {
            cb(null, `${req.params.studentId}`)
        }
    })
    console.log('storage oluşturuldu')
    
    var upload = multer({storage: storage});    
    



module.exports = upload.single('imageupload')
