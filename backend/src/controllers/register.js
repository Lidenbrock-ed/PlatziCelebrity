const bcrypt = require('bcrypt');
const {user}= require('../models/users');
const {userCategories} = require('../models/usersCategories');
async function registerUser(req){
    try{
        let body = req.body;
        if(!body.first_name || !body.last_name||!body.password||!body.email){
            throw new Error
        }
        let emailregistered = true;
        let email= await user.findOne({
            attributes:['email'],
            where:{
                email:body.email,
            }
        });
        switch(email){
            case null:
                emailregistered = false;
                let passwordHash = await bcrypt.hash(body.password, 10);
                await user.create({
                    first_name:body.first_name,
                    last_name:body.last_name,
                    email:body.email,
                    password_:passwordHash,
                    level_id:5
                    });
                let id = await user.findOne({
                    attributes:['id'],
                    where:{
                        email:body.email
                    }
                })
                    userCategories.create({
                        user_id:id.toJSON().id,
                        category_id:[1,2,3,4]
                    });    
                return {
                    status:201,
                    message:"Registered User"
                };
                break;
            default: throw new Error;
        }
    }catch(error){
        return {
            status:204,
            message:"Unexpected Error"
        };
    }
}
module.exports= registerUser;