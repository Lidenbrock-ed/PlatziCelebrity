const {Sequelize,DataTypes,Model}= require('sequelize'); 

class users_level extends Model {}
users_level.init({
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    role:{
        type:DataTypes.CHAR, allowNull:false
    },
    priority:{
        type:DataTypes.INTEGER, allowNull:false
    }
},  {
        freezeTableName: true, timestamps:false
})
module.exports=users_level;