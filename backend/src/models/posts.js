const {DataTypes} = require('sequelize'); 
const sequelize = require('../store/database');

const {category} = require('./categories');
const {postCategories} = require('./postCategories');
const {celebrity} = require('./celebrities');
const {postCelebrities} = require('./postCelebrities');
let post = sequelize.define('posts', {
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    title:{
        type:DataTypes.TEXT, allowNull:false, unique:true
    },
    content:{
        type:DataTypes.TEXT, allowNull:false
    },
    source:{
        type:DataTypes.TEXT, allowNull:false
    },
    views_:{
        type:DataTypes.INTEGER, allowNull:true
    },
    date_:{
        type:DataTypes.DATEONLY, allowNull:false
    },
    image:{
        type:DataTypes.TEXT, allowNull:true
    }
},  {
        freezeTableName: true, timestamps:false
});

let postCategoriesAssociation = function (){
    post.belongsToMany(category,{
        foreignKey:'post_id',
        through:{
            model:postCategories
        },
        timestamps:false,
        uniqueKey:false
    });
    category.belongsToMany(post,{
        foreignKey:'category_id',
        through:{
            model:postCategories,
        },
        timestamps:false,
        uniqueKey:false
    });
};
postCategoriesAssociation();
let postCelebritiesAssociation = function(){
    post.belongsToMany(celebrity,{
        foreignKey:'post_id',
        through:{
            model:postCelebrities
        },
        timestamps:false,
        uniqueKey:false
    });
    celebrity.belongsToMany(post,{
        foreignKey:'celebrity_id',
        through:{
            model:postCelebrities
        },
        timestamps:false,
        uniqueKey:false
    });
};
postCelebritiesAssociation();
module.exports={
    post
};