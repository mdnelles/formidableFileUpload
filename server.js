const express       = require('express'),
      cors          = require('cors'),
      bodyParser    = require('body-parser'),
      app           = express(),
      port          = process.env.PORT || 5000,
      pj            = require('./components/config.json')

app.use(bodyParser.json())
app.use(cors())

var Serv = require('./routes/serverRoutes')

app.use('/serv', Serv)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
