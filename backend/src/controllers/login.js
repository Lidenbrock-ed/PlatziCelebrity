const {user} = require('../models/users');
const bcrypt = require('bcrypt');
async function loginUser (req){
    try{
    let data = req.body;
    if(!data.email|| !data.password){
        throw new Error;
    }
    let allowLogin= await user.findOne({
        attributes:['password_', 'active'],
            where:{
                email:data.email
            }
    })
    if(allowLogin.toJSON().active == false){
        return {
            status:400,
            message: 'Please confirm your email to login People news'
        }
    }
    let allowSession = bcrypt.compareSync(data.password, allowLogin.toJSON().password_);
    switch(allowSession){
        case false:
            throw new Error;
        case true:
            let id = await user.findOne({
                attributes:['id'],
                where:{
                    email:data.email
                }
            });
            id = id.toJSON().id;
            return {
                status: 200,
                id: id,
                message:"successfully"
            };
    }
    }catch(error){
        return {
            status:204,
            message:"Email or Password wrong, please try again"
        };
    }
}
module.exports= {loginUser};
