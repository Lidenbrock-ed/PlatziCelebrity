const express = require('express');
const app = express();
const path = require('path');

//database
const db = require('./store/database');
db.sync({alter:false})

//controllers
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const homeRoute = require('./routes/home');
const profileRoute = require('./routes/profile');
const scrapperRoute = require('./routes/scrapper');
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*app.use(express.static(path.join(__dirname, '../../frontend/public')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../frontend/public/index.html'))
});*/
//Routes
app.use('/api/scrapper',scrapperRoute);
app.use('/api/register', registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/home', homeRoute);
app.use('/api/profile',profileRoute);
module.exports= app;