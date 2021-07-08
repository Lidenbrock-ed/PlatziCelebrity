const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
const {category} = require('./categories');
const {celebrityCategories} = require('./celebrityCategories');
const {associationsBelongsToMany} = require('./associations');
let celebrities = sequelize.define('celebrities', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    name:{
        type:DataTypes.CHAR, allowNull:false, unique:true
    }
},  {
        freezeTableName: true,timestamps:false
});
associationsBelongsToMany({
    firstTable:celebrities,
    secondTable:category,
    nameFKFirstTable:'celebrity_id',
    nameFKSecondTable:'category_id',
    transitiveTable: celebrityCategories
});
module.exports={
    celebrities
};