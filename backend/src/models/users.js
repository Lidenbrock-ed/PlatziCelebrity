const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database')
let user = sequelize.define('user', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    first_name:{
        type:DataTypes.STRING, allowNull:false
    },
    last_name:{
        type:DataTypes.STRING, allowNull:false
    },
    email:{
        type:DataTypes.STRING, allowNull:false, unique:true
    },
    password_:{
        type:DataTypes.STRING, allowNull:false
    },
    level_id:{
        type:DataTypes.INTEGER, allowNull:false, defaultValue:5
    }
},  {
        freezeTableName: false, timestamps:false
})
module.exports={
    user
};