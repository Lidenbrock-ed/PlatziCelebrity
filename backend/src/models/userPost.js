const {Sequelize,DataTypes,Model}= require('sequelize'); 

class users_post extends Model {}
users_post.init({
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER, allowNull:false
    },
    post_id:{
        type:DataTypes.INTEGER, allowNull:false
    }
},  {
        freezeTableName: true, timestamps:false
})
module.exports=users_post;