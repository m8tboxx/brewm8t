const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/errorController');
const mainRoutes = require('./routes/main');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);

app.use(errorController.get404);

app.listen(3000, () => {
    console.info(`Server is running on port 3000...`);
});