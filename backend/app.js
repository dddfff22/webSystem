const express = require('express')
const bodyParser = require('body-parser')

require('./db/mongo') //connect db

const user = require('./routes/user')
const search = require('./routes/search')
const mainpage = require('./routes/mainpage')
const signUp = require('./routes/signUp')

const app = express()
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*")
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
    next()
})
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/search', search)
app.use('/user', user)
app.use('/mainpage',mainpage)
app.use('/signup',signUp)


module.exports = app