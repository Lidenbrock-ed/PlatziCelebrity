const {post} = require('../models/posts');
const {user} = require('../models/users');
const {userCategories} = require('../models/usersCategories');
async function getUser(req){
    try{
        if(!req.body.id){
            throw new Error;
        }
        let id = req.body.id;
        let dataUser = await user.findOne({
            attributes:['first_name','last_name'],
            where:{
                id: id
            },
            include:[{
                model:userCategories,
                attributes:['category_id']
            },
            {
                model:post,
                attributes:['title','source','date_','image'],
                through:{
                    attributes:[]
                }
            }]
        });
        dataUser = dataUser.toJSON();
        return{
            status:200,
            dataUser
        };
    }catch(error){
        return {
            status:204,
            message:"Unexpected Error"
        };
    };
};
async function followCategory(req){
    try{
        if(!req.body.id || !req.body.category){
            throw new Error 
        }
        let categoryFollow = await userCategories.findOne({
            attributes:['category_id'],
            where:{
                user_id: req.body.id
            }
        })
        let index = categoryFollow.category_id.indexOf(req.body.id);
        if(index ==-1){
            categoryFollow.category_id.push(req.body.id)
        }
        let newCategory  = categoryFollow.category_id
        await userCategories.update({category_id:newCategory},{
            where:{
                user_id:req.body.id
            }
        })
        return{
            status:200,
            message:"followed category"
        }
    }catch(error){
        return {
            status:204
        }
    }
}
async function unfollowCategory(req){
    try{
        if(!req.body.id || !req.body.category){
            throw new Error
        }
        let categoryFollow = await userCategories.findOne({
            attributes:['category_id'],
            where:{
                user_id: req.body.id
            }
        })
        let index = categoryFollow.category_id.indexOf(req.body.id);
        categoryFollow.category_id.splice(index, 1);
        let newCategory  = categoryFollow.category_id
        await userCategories.update({category_id:newCategory},{
            where:{
                user_id:req.body.id
            }
        })
        return{
            status:200,
            message:"Removed category"
        }
    }catch(error){
        return {
            status:204
        }
    }
}

module.exports={
    getUser,
    followCategory,
    unfollowCategory,
};




