require('dotenv').config()
const mongoose = require('mongoose')
const URI = process.env.MONGODB_URL
const DB = 'student'

mongoose.connect(`${URI}/${DB}`, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})