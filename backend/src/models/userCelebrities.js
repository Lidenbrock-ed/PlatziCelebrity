const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
let userCelebrities = sequelize.define('user_celebrities', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER, allowNull:false, unique:false
    },
    celebrity_id:{
        type:DataTypes.INTEGER, allowNull:false, unique:false
    }
},  {
        freezeTableName: true,timestamps:false
});
module.exports={
    userCelebrities
};