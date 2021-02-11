const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
let userLevel = sequelize.define('user_level', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    role:{
        type:DataTypes.CHAR, allowNull:false
    },
    priority:{
        type:DataTypes.INTEGER, allowNull:false, unique:true
    }
},  {
        freezeTableName: true, timestamps:false
});
module.exports={
    userLevel
};