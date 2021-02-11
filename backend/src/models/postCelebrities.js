const {DataTypes}= require('sequelize'); 
const sequelize = require('../store/database');
let postCelebrities = sequelize.define('post_celebrities', { 
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    post_id:{
        type:DataTypes.INTEGER, allowNull:false, unique:false
    },
    celebrity_id:{
        type:DataTypes.INTEGER, allowNull:false, unique:false
    }
},  {
        freezeTableName: true, timestamps:false
});
module.exports={
    postCelebrities
};