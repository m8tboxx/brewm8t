const path = require('path');
const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const errorController = require('./controllers/errorController');
const mainRoutes = require('./routes/main');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);

app.use(errorController.get404);

let countdownValue = 3700;
let countdownInterval = setInterval(() => {
    countdownValue -= 1;
    io.emit('countdown', countdownValue);
    
    if(countdownValue <= 0) {
        clearInterval(countdownInterval);
    }

}, 1000);

io.on('connection', (socket) => {
    socket.emit('countdown', countdownValue);
});

server.listen(3000, () => {
    console.info(`Server is running on port 3000...`);
});