const { DataTypes } = require('sequelize')
const db=require('../database/index')

const taskModel=db.sequelize.define('Task',{
    taskname:{
        type:DataTypes.STRING(50),
        required:true
              
    },
    taskdescription:{
        type:DataTypes.STRING(50),  
        unique:true       
    },
    taskfinishdate:{
        type:DataTypes.STRING(50), 
        required:true        
    },
    taskassingned:{
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
    taskModel
}