const fetch = require('node-fetch');
const {post} = require('../models/posts');
const {celebrities} = require('../models/celebrities');
const {postCategories} = require('../models/postCategories');
const {postCelebrities} = require('../models/postCelebrities');
//peticion
async function fetchApiScraper(url){
    try{
        let response = await fetch(url,{
            method:'GET',
                headers:{
                'Content-Type': 'application/json'
            },
        });
        let dataPosts = await response.json();
        return dataPosts;
    }catch(error){
        throw new Error ('We had problems with the API');
    }
}
async function insertCelebrity(celebrity){
    try{
        let existCelebrity = await celebrities.findOne({
            attributes:['id'],
            where:{
                name:celebrity,
            }
        })
        if(!existCelebrity){
            let idCelebrity = await celebrities.create({
                name:celebrity
            })
            return idCelebrity.id;
        } else{
            let idCelebrity = existCelebrity;
            idCelebrity = idCelebrity.id;
            return  idCelebrity;
        }
    }catch(error){
    }
}
async function insertNotices(url){
    try{
        if(!url){
            throw new Error("The URL don't exist");
        }
        let dataPosts = await fetchApiScraper(url);
        dataPosts.map(async (info) => {
            if(!info.title || !info.content|| !info.celebrity || !info.date){
            }else{
                let idCelebrity = await insertCelebrity(info.celebrity);
            }
        })
        return {
            status:201,
            message:'Inserted successfully the notice',
        }
    }catch(error){
        return{
            status:204
        }
    }
}
module.exports = insertNotices;