const express = require('express');
const StudentService = require('../services/student-service');
const router = express.Router();
const upload = require('../middleware/multer-middlware')
const fs = require('fs')

// show all students main page
router.get('/', async (req, res) => {

    const students = await StudentService.load()
    res.render('students', { students })
})

//student register
router.post('/register', async (req, res) => {

    const student = await StudentService.save(req.body)
    fs.mkdir(`./public/labeled-images/${student[0].name} ${student[0].lastname}-${student[0].studentNo} `, (err) => {
        if (err) {
            return console.error(err);
        }
    });

    res.json({
        student
    })
})
//student page
router.get('/:studentId', async (req, res) => {
    const student = await StudentService.findBy("_id", req.params.studentId)
    res.render('student', { student })
})

//image upload
router.post('/:studentId/upload', (req, res) => {
     upload(req, res, (err) => {
         if(err) {
             res.send(err)
         } else {
             console.log(req.file.path);
             res.send('test')
         }
     })
})


module.exports = router