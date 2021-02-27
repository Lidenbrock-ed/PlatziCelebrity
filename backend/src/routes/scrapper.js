const express = require('express');
const Router = express.Router();
const insertNotices = require('../controllers/scrapper');
/*setInterval(async () => {
  const url =`https://davidjaras.com/api/?search=all`;
  const insert = await scrapperModel.all(url);
  console.log("inserted notices done")
}, 1800000);*/

/*Router.get('/', async function (req, res){
  const celebrity = req.query.search;
  const url =`https://davidjaras.com/api/?search=${celebrity}`;
  const result = await scrapperModel.posts(celebrity);
  scrapperModel.data(url);
  res.status(result.status).json(result);
})*/
Router.get('/', async function(req,res){
    const url = `https://davidjaras.com/api/?search=${req.query.search}`;
    let result = await insertNotices(url);
    res.status(result.status).json(result);
})
module.exports = Router;