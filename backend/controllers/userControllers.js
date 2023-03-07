const userModel = require("../models/userModel");



//***      POST/CREATE İŞLEMİ          ****/
const createOne = async (req, res) => {
  try {
    const { userName } = req.body;
    const newUser = await userModel.create({userName});
    return res.status(200).json(newUser);

  } catch (err) {
    return res.json({ message: err.message });
  }
};

//***      POST(ÇOKLU) İŞLEMİ          ****/
const bulkCreate = async (req, res) => {
  try {
    const newUsers = await userModel.bulkCreate(req.body);
    return res.status(200).json(newUsers);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      FİND/GET İŞLEMİ          ****/
const find = async (req, res) => {
  try {
    const user = await userModel.findAll();
    return res.json(user);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      UPDATE/PUT İŞLEMİ          ****/
const update = async (req, res) => {
  try {
    const { userName,email,password } = req.body;
    const changeUser = await userModel.update({userName: userName,email:email,password:password },{
        where:{
            userName:"emrerrr"
           
        }
    }).catch((err)=>{console.log(err); })

    return res.status(200).json(changeUser);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      DELETE İŞLEMİ          ****/
const delItem = async (req, res) => {
  try {
    const id=req.params.id;
    await userModel.destroy({where:{
        id:id
    }})

return res.json()

  } catch (err) {
    return res.json({ message: err.message });
  }
};

module.exports = {
  createOne,
  bulkCreate,
  find,
  update,
  delItem,
};
