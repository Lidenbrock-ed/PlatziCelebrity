const express = require('express');
const Router = express.Router();
const loginUser = require('../controllers/login');
Router.post('/', loginUser);
module.exports = Router;