const {Sequelize,DataTypes,Model}= require('sequelize'); 

class users_celebrities extends Model {}
users_celebrities.init({
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER, allowNull:false
    },
    celebrity_id:{
        type:DataTypes.INTEGER, allowNull:false
    }
},  {
        freezeTableName: true,timestamps:false
})
module.exports=users_celebrities;