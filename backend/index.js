const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000

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

app.post('/api/signup', (req, res) => {
  const data = {
    email : req.body.email,
    password : req.body.password,
    password2 : req.body.password2,
  }
  return res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})