const express = require('express');
const Router = express.Router();
const {registerUser ,activateAccount}= require('../controllers/register')
Router.post('/', async function (req,res){
    let result = await registerUser(req);
    res.status(result.status).json(result);
});
Router.get('/:message', async function (req,res){
    let message = req.params.message;
    let result = await activateAccount(message)
    res.status(result.status).json(result);
});

module.exports=Router;