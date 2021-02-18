const bcrypt = require('bcrypt');
const {user}= require('../models/users');
const {userCategories} = require('../models/usersCategories');
const validatorEmail= require('../auth/authEmail');
async function registerUser(req){
    try{
        let body = req.body;
        if(!body.first_name || !body.last_name||!body.password||!body.email){
            throw new Error
        }
        let checkEmail =/[a-zA-Z0-9_\.]+[_\.]*@[a-z]*\.[a-z]{2,5}/.test(body.email);
        if(checkEmail == false){
            return {
                status:400,
                message:"it isn't a valid email please try again"
            }
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
                validatorEmail({name:body.first_name, email:body.email});    
                return {
                    status:201,
                    message:"Registered user, please confirm you email."
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