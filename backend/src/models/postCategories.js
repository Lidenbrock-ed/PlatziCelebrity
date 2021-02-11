const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
let postCategories = sequelize.define('post_categories', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    post_id:{
        type:DataTypes.INTEGER, allowNull:false, unique:false
    },
    category_id:{
        type:DataTypes.INTEGER, allowNull:false, unique:false
    }
},  {
        freezeTableName: true,timestamps:false
});
module.exports={
    postCategories
};