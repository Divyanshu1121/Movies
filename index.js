const express = require('express');
const bodyParser = require('body-parser');
const port = 8082;
const { db } = require('./config/database.js');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', require('./routers/index.js'));

app.listen(port, (err) => {
    if (!err) {
        db();
        console.log("Server Started on \nhttp://localhost:" + port);
    }
})