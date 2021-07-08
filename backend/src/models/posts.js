const {DataTypes} = require('sequelize'); 
const sequelize = require('../store/database');
const {category} = require('./categories');
const {postCategories} = require('./postCategories');
const {celebrities} = require('./celebrities');
const {postCelebrities} = require('./postCelebrities');
const{associationsBelongsToMany} = require('./associations');
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
associationsBelongsToMany({
    firstTable:post,
    secondTable:category,
    nameFKFirstTable:'post_id',
    nameFKSecondTable:'category_id',
    transitiveTable: postCategories
});
associationsBelongsToMany({
    firstTable:post,
    secondTable:celebrities,
    nameFKFirstTable:'post_id',
    nameFKSecondTable:'celebrity_id',
    transitiveTable: postCelebrities
});
module.exports={
    post
};