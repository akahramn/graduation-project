const express = require('express')
const InstructorService = require('../services/instructor-service')
const NodeWebcam = require('node-webcam')

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
router.get('/take-attendance', (req, res) => {
    const opts = {
        callbackReturn: "location"
    }
    NodeWebcam.capture( "./img", opts, ( err, data ) => {
            console.log(data)
           res.render('attendance', data)
    });

})


module.exports = router