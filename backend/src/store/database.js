const {Sequelize} = require('sequelize');
const {USER_DEV, PASSWORD_DEV, HOST_DEV, DATABASE_DEV} = process.env;
const sequelize = new Sequelize(
    DATABASE_DEV,
    USER_DEV,
    PASSWORD_DEV,
    {
        host:HOST_DEV,
        dialect:'postgres',
        logging:false,
})
async function connect(){
    try{
        sequelize.authenticate();
        console.log("Connected to the DB successfully")
    }catch(error){
        console.error("Unexpected error, please try again");
    }
};
connect()
module.exports = sequelize;