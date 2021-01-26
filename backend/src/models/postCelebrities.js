const {Sequelize,DataTypes,Model}= require('sequelize'); 

class post_celebrities extends Model {}
post_celebrities.init({
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    post_id:{
        type:DataTypes.INTEGER, allowNull:false
    },
    celebrity_id:{
        type:DataTypes.INTEGER, allowNull:false
    }
},  {
        freezeTableName: true, timestamps:false
})
module.exports=post_celebrities;