const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
let celebrityCategories = sequelize.define('celebrity_categories', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    category_id:{
        type:DataTypes.INTEGER, allowNull:false, unique:false
    },
    celebrity_id:{
        type:DataTypes.INTEGER, allowNull:false, unique:false
    }
},  {
        freezeTableName: true, timestamps:false
});
module.exports={
    celebrityCategories
};