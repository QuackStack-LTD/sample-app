const express = require('express');
const path = require('path');
const server = express()
const port = 3000

server.use(express.static(path.join(__dirname, '..', 'frontend')))

var chat = ""

server.get('/sendMessage/:newMessage', (req, res) => {
    console.log(req.params.newMessage)
    chat+= (req.params.newMessage + "</br>")
    res.send(chat)
})

server.get('/recieveChat', (req, res) => {
    res.send(chat)
})

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})