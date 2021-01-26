const {Sequelize,DataTypes,Model}= require('sequelize'); 

class celebrities_categories extends Model {}
celebrities_categories.init({
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    category_id:{
        type:DataTypes.INTEGER, allowNull:false
    },
    celebrity_id:{
        type:DataTypes.INTEGER, allowNull:false
    }
},  {
        freezeTableName: true, timestamps:false
})
module.exports=celebrities_categories;