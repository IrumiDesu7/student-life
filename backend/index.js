const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const { checkValidtoAddUser } = require('./middleware/user')
const { User } = require('./model/user')
const port = 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended : true
}))

app.get('/api/login', (req, res) => {
  const data = {
    username : req.body.username,
    password : req.body.password
  }
  return res.send(data)
})

app.post('/api/signup', checkValidtoAddUser, async (req, res) => {
  const data = {
    email : req.body.email,
    password : req.body.password,
  }

  const newUser = await new User(data)
  newUser.save()
  return res.send({
    msg : 'Signup Successfully'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})