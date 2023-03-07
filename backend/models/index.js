// ilk önce databse import ediyoruz const db=require('../database')
const { DataTypes } = require('sequelize')
const db=require('../database/index')


// sonra tablomuzu oluşturuyoruz
// User burada modelin adı sonrası kolonları 
const indexModel=db.sequelize.define('Index',{},
{
    createAt:true,
    deleteAt:true,
    version:true,
    updateAt:true,

})

module.exports=indexModel;