const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/comments', (req, res) => res.send(JSON.parse(fs.readFileSync('./comments.json', 'utf8'))))
app.post('/comments', (req, res) => {
  console.log('req.body -> ', req.body)
  res.sendStatus(201)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
