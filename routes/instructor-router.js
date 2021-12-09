const express = require('express')
const InstructorService = require('../services/instructor-service')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        Hello: 'Instructor Home Page'
    })
})
//Instructor Register
router.post('/register', async (req, res) => {
    const instructor = await InstructorService.save(req.body)
    res.json({
        instructor
    }) 
})
//Instructor take-attendance



module.exports = router