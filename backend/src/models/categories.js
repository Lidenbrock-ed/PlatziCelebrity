const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
const category = sequelize.define('categories', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    name:{
        type:DataTypes.CHAR, allowNull:false
    }
},  {
        freezeTableName: true, timestamps:false
});
module.exports={
    category
};