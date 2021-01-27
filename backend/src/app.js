const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config();
const path = require('path');

//database
const db = require('./store/database');

//controllers
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login')
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //res.header('content-type: application/json; charset=utf-8');
    next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/index.html'))
});*/
//Routes
//app.use('/api/scrapper', scrapperController);
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);

module.exports= app;