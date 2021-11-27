const path = require('path')
const express = require('express')
const IndexRouter = require('./routes/index-router')
require('./db-connection')

const app = express()
const port = process.env.PORT || 3000

const basePath = path.join(__dirname, '../public')

app.use(express.static(basePath))


app.use('/api',IndexRouter )



app.listen(port, () => {
    console.log(`Server started to liste port ${port}`)
})