const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
let postCategories = sequelize.define('post_categories', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    post_id:{
        type:DataTypes.INTEGER, allowNull:false, unique:false, references:{
            model: 'posts',
            key: 'id'
        }
    },
    category_id:{
        type:DataTypes.INTEGER, allowNull:false, unique:false, references:{
            model: 'categories',
            key: 'id'
        }
    }
},  {
        freezeTableName: true,timestamps:false
});
module.exports={
    postCategories
};