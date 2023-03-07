const express=require('express')
const app =express();
const db=require('./database')
const userRoute=require("./routes/userRoutes")



app.use(express.json())// req.body .alışması için 

app.use(userRoute)

db.CONNECT_DB();







const port=5000;
app.listen(port,()=>{
    db.REFRESH_DB();// bir kere çalıştır databsede oluştu sonra yoruma al almassan tekrar aynısı oluşur
    console.log(`localhost:${port} is active `);
})