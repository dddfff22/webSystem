const express = require('express')
const bodyParser = require('body-parser')

require('./db/mongo') //connect db
// const doctor = require('./routes/doctor')
// const patient = require('./routes/patient')

const user = require('./routes/user')
const search = require('./routes/search')
const mainpage = require('./routes/mainpage')
const app = express()
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
    next()
})
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
// app.use('/doctor', doctor)
// app.use('/patient', patient)
app.use('/search', search)
app.use('/user', user)
app.use('/mainpage',mainpage)
module.exports = app