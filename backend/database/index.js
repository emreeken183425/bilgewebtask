// sequelize import ettik ilk önce
const Sequelize = require("sequelize");
let db = {};
// postgresql ile bağlantı kurduk burada
const sequelize = new Sequelize({
  host: "localhost",
  dialect: "postgres",
  database: "BilgeWeb",
  username: "postgres",
  password: "183425",
  port: 5433,
  pool: 40,
  retry: 3,
  logging: true,
});

const CONNECT_DB = async (req, res) => {
  try {
    await sequelize.authenticate({ logging: true });
    console.log("sequelzie bağlandı");
  } catch (error) {
    return console.log(`${error.message} `);
  }
};

const REFRESH_DB = async () => {
  try {
    const userModel=require("../models/userModel")
   

    

    // // // book model ilişkileri
      // userModel.hasOne(taskModel);
    // // adminModel.belongsTo(userModel);

    
 




    
sequelize.sync({force:true})

  } catch (error) {
    return console.log(`${error.message} `);
  }
};

db.CONNECT_DB = CONNECT_DB;
db.sequelize = sequelize;
db.REFRESH_DB = REFRESH_DB;
// export ettik en son sonra expressjs e gidip çağıracağız
//expressjs te aşağıdaki gibi çağıracağız
// const db=require('./database') ile import
//db.CONNECT_DB(); ile çağırdık

module.exports = db;
