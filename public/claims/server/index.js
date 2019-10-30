const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const route = require('./route')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

route(app)

app.listen(3001, () => console.log('Running on port 3002'))

console.log(__dirname + '/public')
