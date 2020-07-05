const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const messages = [];
const players = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', (socket) => {
    socket.emit('messages', messages);

    socket.on('user_joined', (name) => {
        id: socket.id,
        name
    });

    players.push(player);

    console.log(name, "has joined the chat!");

    console.log(players);

    socket.on('message', (message) => {
        const message1 = +messages;

        if(message1 === "") {
            messages.push({
                user: "Ali Baba",
                message: "Hey! Don't send blank messages please."
            });
    io.emit('messages', messages)
        }
    });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
