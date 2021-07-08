const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
const {userLevel} = require('./usersLevel');
const {post} = require('./posts');
const {userPost} = require('./userPost');
const {celebrities} = require('./celebrities');
const {userCelebrities} = require('./userCelebrities')
const {userCategories} = require('./usersCategories');
const {associationsBelongsTo, associationsBelongsToMany, associationsHasMany} = require('./associations');
let user = sequelize.define('users', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    first_name:{
        type:DataTypes.STRING, allowNull:false
    },
    last_name:{
        type:DataTypes.STRING, allowNull:false
    },
    email:{
        type:DataTypes.STRING, allowNull:false, unique:true
    },
    password_:{
        type:DataTypes.STRING, allowNull:false
    },
    active:{
        type:DataTypes.BOOLEAN, allowNull:false, defaultValue: false
    },
},  {
        freezeTableName: false, timestamps:false
});
associationsBelongsTo({
    firstTable:user,
    secondTable:userLevel,
    nameFK: 'level_id'
});
associationsBelongsToMany({
    firstTable:user,
    secondTable:post,
    nameFKFirstTable:'user_id',
    nameFKSecondTable:'post_id',
    transitiveTable: userPost
});
associationsBelongsToMany({
    firstTable:user,
    secondTable:celebrities,
    nameFKFirstTable:'user_id',
    nameFKSecondTable:'celebrity_id',
    transitiveTable: userCelebrities
});
associationsHasMany({
    firstTable:user,
    secondTable:userCategories,
    nameFK: 'user_id'
})
module.exports = {
    user
};