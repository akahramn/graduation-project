const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        Hello: 'Instructor Home Page'
    })
})

module.exports = router