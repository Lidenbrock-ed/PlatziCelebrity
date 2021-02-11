const express = require('express');
const Router = express.Router();
const loginUser = require('../controllers/login');
Router.post('/', async function (req,res){
    let result = await loginUser(req);
    res.status(result.status).json(result);
});
module.exports = Router;