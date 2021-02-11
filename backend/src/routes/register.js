const express = require('express');
const Router = express.Router();
const registerUser = require('../controllers/register');

Router.post('/', async function (req,res){
    let result = await registerUser(req);
    res.status(result.status).json(result);
});

module.exports=Router;