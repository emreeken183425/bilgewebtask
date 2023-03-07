// ilk önce databse import ediyoruz const db=require('../database')
const { DataTypes } = require('sequelize')
const db=require('../database/index')


// sonra tablomuzu oluşturuyoruz
// User burada modelin adı sonrası kolonları 
const userModel=db.sequelize.define('User',{
    userName:{
        type:DataTypes.STRING(50),
        required:true
              
    },
    email:{
        type:DataTypes.STRING(50),  
        unique:true       
    },
    password:{
        type:DataTypes.STRING(50), 
        required:true        
    },
    level:{
        type:DataTypes.STRING(50), 
        required:true        
    }
},
{
    createAt:true,
    deleteAt:true,
    version:true,
    updateAt:true,

})


module.exports={
    userModel
    
};