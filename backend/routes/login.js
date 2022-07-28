const express = require('express')
const { checkValidtoAddUser } = require('../middleware/user')
const { User } = require('../model/user')
const bcrypt = require('bcryptjs')

const router = express.Router()

router.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email : req.body.email
    })
    if (!user) return res.send('Email not Found')

    if (! await bcrypt.compare(req.body.password, user.password)) return res.send('Password is Wrong')
    return res.send('Login Successfully')
})
  
router.post('/api/signup', checkValidtoAddUser, async (req, res) => {
    const salt = bcrypt.genSaltSync(10)
    const data = {
        email : req.body.email,
        password : bcrypt.hashSync(req.body.password, salt),
    }

    const newUser = await new User(data)
    newUser.save()
    return res.send({
        msg : 'Signup Successfully'
    })
})

module.exports = router