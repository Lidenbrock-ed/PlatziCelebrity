const {Sequelize,DataTypes,Model}= require('sequelize'); 

class users_categories extends Model {}
users_categories.init({
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER, allowNull:false
    },
    category_id:{
        type:DataTypes.INTEGER, allowNull:false
    }
},  {
        freezeTableName: true, timestamps:false
})
module.exports=users_categories;