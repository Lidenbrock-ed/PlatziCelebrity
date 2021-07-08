const {Sequelize} = require('sequelize');
const config= require('../config/config');
const sequelize = new Sequelize(
    config.DATABASE_DEV,
    config.USER_DEV,
    config.PASSWORD_DEV,
    {
        host:config.HOST_DEV,
        dialect:'postgres',
        logging:false,
})
async function connect(){
    try{
        await sequelize.authenticate();
        console.log("Connected to the DB successfully")
    }catch(error){
        console.error("Unexpected error, please try again");
    }
};
connect()
module.exports = sequelize;