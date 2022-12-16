const io = require('socket.io/client-dist/socket.io');

const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('connected');
});

socket.on('time', (timeString) => {
    console.log(timeString);
    document.getElementById('time').innerHTML = timeString;
});
