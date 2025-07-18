const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())

//Connect DB
const conn = require('./db/conn')

conn()

//Routes
const routes = require('./routes/router')

app.use('/api', routes)

app.listen(process.env.PORT || 3000, function() {
    console.log(`Commencing merchant application.`)
})
