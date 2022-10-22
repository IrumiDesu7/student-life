require('dotenv').config()
const mongoose = require('mongoose')
const URI = process.env.MONGODB_URL
const DB = 'student_life'

mongoose.connect(URI, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})