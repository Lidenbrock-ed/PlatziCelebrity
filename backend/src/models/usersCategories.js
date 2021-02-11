const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
let userCategories= sequelize.define('user_categories', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER, allowNull:false
    },
    category_id:{
        type:DataTypes.ARRAY(DataTypes.INTEGER), allowNull:false
    }
},  {
        freezeTableName: true, timestamps:false
});
module.exports={
    userCategories
};