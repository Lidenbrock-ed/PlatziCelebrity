const {user} = require('../models/users');
const bcrypt = require('bcrypt');
async function loginUser (req, res){
    try{
    let data = req.body;
    if(!data.email|!data.password){
        throw new Error;
    }
    let password= await user.findOne({
        attributes:['password_'],
            where:{
                email:data.email
            }
    })
    let allowSession = bcrypt.compareSync(data.password, password.toJSON().password_);
    switch(allowSession){
        case false:
            throw new Error;
            break;
        case true:
            let id = await user.findOne({
                attributes:['id'],
                where:{
                    email:data.email
                }
            });
            id = id.toJSON().id;
            res.json({
                id: id,
                status:200,
                message:"successfully"
            });
            break;
    }
    }catch(error){
        res.json({
            status:204,
            message:"Email or Password wrong, please try again"
        });
    }
}
module.exports= loginUser;