const express = require('express');
const IndexRouter = require('./routes/index-router');
const bodyParser = require('body-parser');
require('./db-connection');

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'pug')
app.use(bodyParser.json())



app.use('/api',IndexRouter )



app.listen(port, () => {
    console.log(`Server started to liste port ${port}`)
})