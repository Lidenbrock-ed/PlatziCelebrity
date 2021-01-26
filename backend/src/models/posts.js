const {Sequelize,DataTypes,Model}= require('sequelize'); 

class posts extends Model {}
posts.init({
    id: {
        type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true, allowNull:false
    },
    title:{
        type:DataTypes.TEXT, allowNull:false
    },
    content:{
        type:DataTypes.TEXT, allowNull:false
    },
    source:{
        type:DataTypes.TEXT, allowNull:false
    },
    views_:{
        type:DataTypes.INTEGER, allowNull:true
    },
    date_:{
        type:DataTypes.DATE, allowNull:false
    },
    image:{
        type:DataTypes.TEXT, allowNull:true
    }
},  {
        freezeTableName: true, timestamps:false
})
module.exports=posts;