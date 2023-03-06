const express = require('express');
const mongoose = require('mongoose');
const aMiddleware=require('./adminMiddleware');

const app = express();
const port = 5000;


app.use(express.json());// json formatındaki datalarla çalışmamaızı sağlar 
app.use((req,res,next)=>{
  console.log('global middlware works');
  next();
})



// // Veritabanı bağlantısı
// mongoose.connect('mongodb://localhost:27017/bilgeweb', { useNewUrlParser: true })
//   .then(() => console.log('Veritabanı bağlantısı başarılı'))
//   .catch((err) => console.error(err));

// // Rotalar
// app.get('/', (req, res) => {
//   return res.send('Merhaba Dünya!');
// });

app.post('/',aMiddleware.checkAdmin,(req,res)=>{
   return res.json(req.body)
})
app.listen(port, () => {
  console.log(`Localhost ${port} portunda başlatıldı`);
});