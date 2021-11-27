const express = require('express');
const StudentService = require('../services/student-service');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        Hello : 'Student Home Page'
    })
})

router.post('/register', async (req, res) => {
    const student = req.body;
    const image = req.files.image;
    image.mv(path.resolve(__dirname,`public/img/image.name`, async (err) => {
        
    }))

    const student = await StudentService.save(req.body)

    res.json({
        student
    })

    
})
module.exports = router