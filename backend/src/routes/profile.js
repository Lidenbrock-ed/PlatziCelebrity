const express = require('express');
const Router = express.Router();
const {getUser, followCategory, unfollowCategory} = require('../controllers/profile')
Router.post('/',async function(req,res){
    let result = await getUser(req);
    res.status(result.status).json(result.dataUser);
});
Router.post('/category',async function(req,res){
    let result = await followCategory(req);
    res.status(result.status).json(result.message);
});
Router.patch('/category',async function(req,res){
    let result = await unfollowCategory(req);
    res.status(result.status).json(result);
});

module.exports = Router;