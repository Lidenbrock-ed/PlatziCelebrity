const bcrypt = require('bcrypt');
const {user}= require('../models/users');

async function registerUser(req,res){
    try{
        let body = req.body;
        if(!body.first_name | !body.last_name|!body.password|!body.email){
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
                res.json({
                    status:201,
                    message:"Registered User"
                })
                break;
            default: throw new Error;
        }
    }catch(error){
        res.json({
            status:204,
            message:"Unexpected Error"
        });
    }
}
module.exports= registerUser;