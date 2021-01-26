const {Sequelize,DataTypes,Model}= require('sequelize'); 

class categories extends Model {}
categories.init({
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    name:{
        type:DataTypes.CHAR, allowNull:false
    }
},  {
        freezeTableName: true, timestamps:false
})
module.exports=categories;