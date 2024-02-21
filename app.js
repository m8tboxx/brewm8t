const path = require('path');
const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/errorController');
const mainRoutes = require('./routes/main');
const Countdown = require('./models/countdown');
const ArduinoController = require('./models/arduinoSocketIo');
const socketFunctions = require('./models/socketfunctions');

const app = express();
const server = http.createServer(app);
// const countdown = new Countdown(0);
// const io = socketFunctions.initializeSocket(server);

const brewController = new ArduinoController(server);


app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);

app.use(errorController.get404);

server.listen(3000, () => {
    console.info(`Server is running on port 3000...`);
});