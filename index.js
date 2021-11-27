const path = require('path')
const express = require('express')
const app = express()
require('./db-connection')

const port = process.env.PORT || 3000

const basePath = path.join(__dirname, '../public')

app.use(express.static(basePath))



app.get('/', (req, res) => {
    res.sendFile(path.join('/mnt/c/Users/akahr/Desktop/workspace/graduation-project/public/index.html'))
})



app.listen(port, () => {
    console.log(`Server started to liste port ${port}`)
})