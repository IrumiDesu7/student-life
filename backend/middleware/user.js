const { check, validationResult } = require('express-validator')

const checkValidtoAddUser = [
    check('email').isEmail(),
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
        return res.send({
            errors
        })
    }
]

module.exports = {
    checkValidtoAddUser
}