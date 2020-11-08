const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const {PORT_SERVER} = process.env;
const registerController = require('./controllers/register');
const postController = require('./controllers/post');
const profileController = require('./controllers/profile');
const loginController = require('./controllers/login');



app.use(bodyParser.json());
app.get('/', function (req, res, next){
    res.send("index");
})


app.use('/login', loginController);
app.use('/profile', profileController);
app.use('/register', registerController);
app.use('/home', postController);
app.listen( PORT_SERVER, function () {
    console.log(`Server running in http://Localhost:${PORT_SERVER}`);
});

