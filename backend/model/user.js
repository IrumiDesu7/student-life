const mongoose = require('mongoose')

require('../utils/db')

const userSchema = new mongoose.Schema( {
    email : {
        type : String,
        required : true,
    },
    password : {
        type : String,
        required : true,
    },
} )

const User = new mongoose.model('User', userSchema)

module.exports = {
    userSchema,
    User
}
