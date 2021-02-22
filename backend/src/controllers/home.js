const {userCategories} = require('../models/usersCategories');
const {category} = require('../models/categories');
const {post} = require('../models/posts');
const {userPost} = require('../models/userPost');
const {user} = require('../models/users');
const {userCelebrities} = require('../models/userCelebrities')
async function getPost(req){
    try{
        if(!req.body.id){
            throw new Error
        }
        let idCategory = await userCategories.findOne({
            attributes: ['category_id'],
            where:{
                user_id:req.body.id
            }
        });
        let dataPosts = await post.findAll({
            include:[{
                model:category,
                where:{
                    id:idCategory.category_id,
                },
                order:[
                    ['date_', 'DESC']
                ],
                through:{
                    attributes:[]
                }
            }]
        })
         return {
             status:200,
             dataPosts
         }
    }catch(error){
        return {
            status:204
        }
    }
}
async function getCategory(req){
    try{
        if(!req.body.category || req.body.category > 4){
            throw new Error;
        }
        let dataPosts = await post.findAll({
            include:[{
                model:category,
                require:true,
                where:{
                    id:req.body.category
                },
                order:[
                    ['date_', 'DESC']
                ],
                through:{
                    attributes:[]
                }
            }]
        })
        return {
            status:200,
            dataPosts
        }
    }catch(error){
        return{
            status:204,
        }
    }
}
async function getBookmarks(req){
    try{
        if(!req.body.id){
            throw new Error;
        }
        let bookmarks = await user.findOne({
            attributes:['id'],
            where:{
                id: req.body.id
            },
            include:[{
                model:post,
                attributes:['id','title','source','date_'],
                through:{
                    attributes:[]
                }
            }]
        });
        return{
            status:200,
            bookmarks
        }
    }catch(error){
        return{
            status:204
        }
    }
}
async function postBookmarks(req){
    try{
        if(!req.body.id || !req.body.post){
            throw new Error;
        }
        let bookmarks = await userPost.create({
            user_id:req.body.id,
            post_id:req.body.post
        })
        return{
            status:200,
            message:"Added bookmark"
        }
    }catch(error){
        return{
            status:204
        }
    }
}
async function removeBookmarks(req){
    try{
        if(!req.body.id || !req.body.post){
            throw new Error;
        }
        await userPost.destroy({
            where:{
                user_id:req.body.id,
                post_id:req.body.post
            }
        })
        return {
            status:200,
            message:"Removed bookmark"
        }
    }catch(error){
        return {
            status:204,
        }
    }
}
async function followCelebrity(req){
    try{
        if(!req.body.id || !req.body.celebrity){
            throw new Error;
        }
        await userCelebrities.create({
            user_id: req.body.id,
            celebrity_id:req.body.celebrity
        })
        return{
            status:201,
            message:"Followed celebrity"
        }
    }catch(error){
        return{
            status:204
        }
    }
}
async function unfollowCelebrity(req){
    try{
        if(!req.body.id ||!req.body.celebrity){
            throw new Error;
        }
        await userCelebrities.destroy({
            where:{
                user_id: req.body.id,
                celebrity_id: req.body.celebrity
            }
        })
        return{
            status:201,
            message:"Unfollow celebrity"
        }
    }catch(error){
        return{
            status:204
        }
    }
}
module.exports = {
    getPost,
    getCategory,
    getBookmarks,
    postBookmarks,
    removeBookmarks,
    followCelebrity, 
    unfollowCelebrity
};