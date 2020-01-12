const express   = require('express'),
      serv      = express.Router(),
      cors      = require('cors'),
      formidable= require('formidable');

serv.use(cors())

serv.all('/upload', (req, res) => {

  console.log('in upload serv file')

    new formidable.IncomingForm().parse(req)
    .on('fileBegin', (name, file) => {
        const realPath = __dirname.toString().replace('routes','tmp') 
        file.path = realPath + '/' + file.name
    })
    .on('file', (name, file) => {
        console.log('Uploaded file', name, file)
        res.send('file uploaded').end()
    })
    .on('aborted', () => {
        console.error('Request aborted by the user')
        res.send('file aborted').end()
    })
    .on('error', (err) => {
        console.error('Error', err)
        throw err
        res.send('error:' + err).end()
    })
    .on('end', () => {
        res.end()
    })

})

module.exports = serv
