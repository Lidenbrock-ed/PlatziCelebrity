const {Sequelize,DataTypes,Model}= require('sequelize'); 

class post_categories extends Model {}
post_categories.init({
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    post_id:{
        type:DataTypes.INTEGER, allowNull:false
    },
    category_id:{
        type:DataTypes.INTEGER, allowNull:false
    }
},  {
        freezeTableName: true,timestamps:false
})
module.exports=post_categories;