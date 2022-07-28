const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const { User } = require('../model/user')

const checkValidtoAddUser = [
    check('email').isEmail().bail().custom( async (value, {req}) => {
        const email = await User.find({email : value})
        if (email.length !== 0) throw new Error('Email is Already to Used')
        return true 
    }),
    check('password').isLength({ min : 8}),
    check('passwordConfirm').custom((value, {req}) => {
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
        }
        return true
    }),
    (req, res, next) => {
        const errors = validationResult(req)
        // return res.send(errors)
        if (errors.isEmpty()) return next()
        return res.status(400).send(errors)
    }
]

const verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token']
    jwt.verify(token, 'SECRET', function(err, decoded) {
        if (err) return res.status(500).send('Invalid Token')
        next()
    })
}

module.exports = {
    checkValidtoAddUser,
    verifyToken
}