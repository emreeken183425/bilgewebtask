const taskModel = require("../models/taskModel");



//***      POST/CREATE İŞLEMİ          ****/
const createOne = async (req, res) => {
  try {
    const { taskname } = req.body;
    const newTask = await taskModel.create({taskname});
    return res.status(200).json(newTask);

  } catch (err) {
    return res.json({ message: err.message });
  }
};

//***      POST(ÇOKLU) İŞLEMİ          ****/
const bulkCreate = async (req, res) => {
  try {
    const newTasks = await taskModel.bulkCreate(req.body);
    return res.status(200).json(newTasks);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      FİND/GET İŞLEMİ          ****/
const find = async (req, res) => {
  try {
    const task = await taskModel.findAll();
    return res.json(task);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      UPDATE/PUT İŞLEMİ          ****/
const update = async (req, res) => {
  try {
    const { taskname,taskdescription,taskfinishdate,taskassingned } = req.body;
    const changeTask = await userModel.update({taskname: taskname,taskdescription:taskdescription,taskfinishdate:taskfinishdate ,taskassingned:taskassingned},{
        where:{
            taskname:"görevv"
           
        }
    }).catch((err)=>{console.log(err); })

    return res.status(200).json(changeTask);
  } catch (err) {
    return res.json({ message: err.message });
  }
};


//***      DELETE İŞLEMİ          ****/
const delItem = async (req, res) => {
  try {
    const id=req.params.id;
    await taskModel.destroy({where:{
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
