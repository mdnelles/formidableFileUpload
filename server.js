const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')
const app           = express()
const port          = process.env.PORT || 5000
const pj            = require('./components/config.json')

app.use(bodyParser.json())
app.use(cors())

var Serv = require('./routes/serverRoutes')

app.use('/serv', Serv)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})