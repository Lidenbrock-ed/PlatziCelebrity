const {Sequelize} = require('sequelize');
const {USER_DEV, PASSWORD_DEV, HOST_DEV, PORTDB, DATABASE_DEV} = process.env;
const sequelize = new Sequelize(`postgres://${USER_DEV}:${PASSWORD_DEV}@${HOST_DEV}:${PORTDB}/${DATABASE_DEV}`)
async function connect(){
    try{
        sequelize.authenticate();
        console.info("Connected to the DB successfully")
    }catch(error){
        console.error("Unexpected error, please resolve this error: ", error);
    }
};
connect()
module.exports = sequelize;