const express = require('express');
const StudentService = require('../services/student-service');
const multer  = require('multer')
const upload = multer({ dest: 'img/' })

const router = express.Router();

// show all students main page
router.get('/', async (req, res) => {

    const students = await StudentService.load()
    res.render('students', { students })
})

router.post('/register', async (req, res) => {

    const student = await StudentService.save(req.body)
    res.json({
        student
    })
})

router.get('/:studentId', async (req, res) => {
    const student = await StudentService.findBy('id', req.params.studentId)
    res.render('student', { student })
})
router.post('/:studentId/', upload.single('imageupload') ,(req, res) => {
    console.log(req.file)
    res.send('File Upload Successful')
})


module.exports = router