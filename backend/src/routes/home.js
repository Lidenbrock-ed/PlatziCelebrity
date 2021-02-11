const express = require('express');
const Router = express.Router();
const {getPost,getCategory,getBookmarks, postBookmarks, removeBookmarks, followCelebrity, unfollowCelebrity} = require('../controllers/home');
Router.post('/', async function (req, res){
    let result = await getPost(req);
    res.json(result);
});
Router.post('/category', async function(req,res){
    let result =  await getCategory(req);
    res.status(result.status).json(result);
});
Router.post('/bookmarks', async function(req,res){
    let result = await getBookmarks(req);
    res.status(result.status).json(result.bookmarks);
});
Router.post('/follow/bookmarks', async function(req,res){
    let result = await postBookmarks(req);
    res.status(result.status).json(result);
});
Router.delete('/follow/bookmarks', async function(req,res){
    let result = await removeBookmarks(req);
    res.status(result.status).json(result);
});
Router.post('/follow/celebrity', async function(req,res){
    let result = await followCelebrity(req);
    res.status(result.status).json(result);
});
Router.delete('/follow/celebrity', async function(req,res){
    let result = await unfollowCelebrity(req);
    res.status(result.status).json(result);
});
module.exports = Router;