const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'user1',
        text: 'helloooo!',
        createdAt: 223
    });

    socket.on('createMessage', (message) => {
        console.log('Create message:', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });


});
app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});