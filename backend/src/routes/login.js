const express = require('express');
const Router = express.Router();
const {loginUser}= require('../controllers/login');
Router.post('/', async function (req,res){
    try{
        let result = await loginUser(req);
        res.status(result.status).json(result);
    }catch(error){
        res.status(result.status).json(result);
    }
});
module.exports = Router;