const {userCategories} = require('../models/usersCategories');
const {postCategories} = require('../models/postCategories');
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
        let id = req.body.id;
        let idCategory = await userCategories.findOne({
            attributes: ['category_id'],
            where:{
                user_id:id
            }
        });
        let {category_id}= idCategory.toJSON();
        let postId;
        switch (category_id.length) {
            case 1:
                postId = await postCategories.findAll({
                    attributes:['post_id'],
                    where:{  
                        category_id:[1], 
                    }
                });
                break;
            case 2:
                postId = await postCategories.findAll({
                    attributes:['post_id'],
                    where:{  
                        category_id:[1,2], 
                    }
                });
                break;
            case 3:
                postId = await postCategories.findAll({
                    attributes:['post_id'],
                    where:{  
                        category_id:[1,2,3], 
                    }
                });
                break;
            case 4:
                postId = await postCategories.findAll({
                    attributes:['post_id'],
                    where:{  
                        category_id:[1,2,3,4], 
                    }
                });
                break;
            default:
                break;
        }
        //console.log(postId);
        let prueba =
            await post.findAll({
                include:[{
                    model:category,
                }]
            });
        //console.log(prueba);
        return category_id;
    }catch(error){
        return {
            status:204
        }
    }
}
async function getCategory(req){
    try{
        if(!req.body.category){
            throw new Error;
        }
        let postData =[]; 
        let categoryId = req.body.category;
        let postId = await postCategories.findAll({
            attributes:['post_id'],
            where:{  
                category_id:categoryId, 
            }
        });

        let data = await postId.map( async id =>{
            await post.findAll({
                where:{
                    id:1
                }
        })
        });
        console.log(data);
        return {
            status:200,
            data: 'workind'
        }
    }catch(error){
        console.error(error);
        return{
            status:204
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
                attributes:['title','source','date_']
            }]
        });
        bookmarks = bookmarks.toJSON();
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