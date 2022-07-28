const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { checkValidtoAddUser, verifyToken } = require('../middleware/user')
const { User } = require('../model/user')

const router = express.Router()

router.get('/api/post', verifyToken, async (req, res) => {
    return res.send(token)
})

router.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email : req.body.email
    })
    if (!user) return res.status(400).send('Email not Found')

    if (! await bcrypt.compare(req.body.password, user.password)) return res.status(401).send('Password is Wrong')

    let token = jwt.sign({
        user
    }, 'SECRET')
    return res.send({
        message : 'Login Successfully',
        token
    })
})
  
router.post('/api/signup', checkValidtoAddUser, async (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    const data = {
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, salt),
    }

    const newUser = await new User(data)
    newUser.save()
    return res.send('Signup Successfully')
})

module.exports = router