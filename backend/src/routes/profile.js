const express = require('express');
const Router = express.Router();
const {getUser, followCategory, unfollowCategory} = require('../controllers/profile')
Router.post('/',async function(req,res){
    try{
        let result = await getUser(req);
        res.status(result.status).json(result.dataUser);
    }catch(error){
        res.status(result.status).json(result);
    }
});
Router.post('/category',async function(req,res){
    try{
        let result = await followCategory(req);
        res.status(result.status).json(result.message);
    }catch(error){
        res.status(result.status).json(result);
    }
});
Router.patch('/category',async function(req,res){
    try{
        let result = await unfollowCategory(req);
        res.status(result.status).json(result);
    }catch(error){
        res.status(result.status).json(result);
    }
});

module.exports = Router;