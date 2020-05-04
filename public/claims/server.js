const express = require('express')
const path = require('path')
// const bodyParser = require('body-parser')
// const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 30000

app.use(express.static(__dirname))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(PORT, () => console.log(`Running on port ${PORT}`))
