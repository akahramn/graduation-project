const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        Hello : 'Student Home Page'
    })
})

module.exports = router