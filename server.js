const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/node_modules/bulma/css/bulma.min.css');
});

app.get('/bundle.js', (req, res) => {
    res.sendFile(__dirname + '/bundle.js');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');

  setInterval(() => {
    socket.emit('time', new Date().toTimeString());
  }, 1000);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
