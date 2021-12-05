const express = require('express');
const StudentService = require('../services/student-service');
const fileUpload = require('../middleware/multer-middlware')

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        Hello: 'Student Home Page'
    })
})

router.post('/register', fileUpload, async (req, res) => {

    const student = await StudentService.save(req.body)

    res.json({
        student
    })


})
module.exports = router