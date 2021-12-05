const multer = require('multer')


function fileUpload(req, res, next) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, '/mnt/c/Users/akahr/Desktop/workspace/graduation-project/public/img')
        },
        filename: function (req, file, cb) {
            cb(null, 'Abdullah')
        }
    })
    
    const upload = multer({storage: storage});
    upload.single('img')

    next()
    
}


module.exports = fileUpload
