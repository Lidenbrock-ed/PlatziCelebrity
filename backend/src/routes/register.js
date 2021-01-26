const express = require('express');
const Router = express.Router();
const registerUser = require('../controllers/register');

Router.post('/', registerUser);

module.exports=Router;