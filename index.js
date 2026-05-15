require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello !')
})

app.get('/hey', (req, res) => {
    res.send("<h1>NIkal pehli fursat me </h1>")
})

app.get('/json', (req, res) => {
    res.json({message: "This is a JSON response"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})