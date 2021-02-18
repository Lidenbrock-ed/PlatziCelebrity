const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
const {userLevel} = require('./usersLevel');
const {post} = require('./posts');
const {userPost} = require('./userPost');
const {celebrity} = require('./celebrities');
const {userCelebrities} = require('./userCelebrities')
const {userCategories} = require('./usersCategories');
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
let userLevelAssociation = () => {
    user.belongsTo(userLevel, {foreignKey:'level_id'})
};
userLevelAssociation();
let userPostAssociation = () => {
    user.belongsToMany(post, {
        foreignKey:'user_id',
        through:{
            model:userPost
        },
        timestamps:false,
        uniqueKey:false
    });
    post.belongsToMany(user, {
        foreignKey:'post_id',
        through:{
            model:userPost
        },
        timestamps:false,
        uniqueKey:false
    });
}; 
userPostAssociation();
let userCelebritiesAssociation = () => {
    user.belongsToMany(celebrity,{
        foreignKey:'user_id',
        through:{
            model:userCelebrities,
        },
        timestamps:false,
        uniqueKey:false
    });
    celebrity.belongsToMany(user,{
        foreignKey:'celebrity_id',
        through:{
            model:userCelebrities
        },
        timestamps:false,
        uniqueKey:false
    });
}; 
userCelebritiesAssociation();
let userCategoriesAssociation = () => {
    user.hasMany(userCategories, {
        foreignKey: "user_id"
    });
};
userCategoriesAssociation();
module.exports = {
    user
};