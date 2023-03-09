import React, { useState } from 'react';
import {  Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from  "axios"





function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [level, setLevel] = useState(0);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const navigate=useNavigate()

  const [task, setTask] = useState({
    taskname:"",
    taskdescription:"",
    taskfinishdate:"",
    taskassingned:""

  })

  const handleLogin = (username) => {
    if (username === "admin") {
      setLevel(1);
    } else {
      setLevel(2);
    }
  }

  const handleChangedTask = (e) => {
    setTask({ ...task, [e.target.id]: e.target.value });
    
  };

  const addTask = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/newtask', task,{
        withCredentials: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        }
      });
      alert(`The Task ${task.taskname} is added.`);
      setTask({
        taskname: '',
        taskdescription: '',
        taskfinishdate: '',
        taskassigned: ''
      });
      handleCloseModal();
    } catch (error) {
      console.log(error);
      alert('An error occurred while adding the task.');
    }
  };


  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-dark text-white ">
        <div className="container-md">
          <a className="navbar-brand text-white " href="#">Bilge Web </a>
        </div>
        <div className="navbar navbar-expand-lg bg-dark text-white">
          {level === 0 && (
            <button type="button" className="navbar-brand text-white btn btn-primary" onClick={handleShowModal}>
              Yeni Görev Ekle
            </button>
          )}
          {level === 1 && (
            <button type="button" className="navbar-brand text-white btn btn-primary" onClick={handleShowModal}>
              Yeni Görev Ekle
            </button>
          )}
          <button type="button" onClick={()=>navigate('/login')   } className="navbar-brand text-white btn btn-primary">
            Giriş
          </button>
          <button type="button" onClick={()=>navigate('/register')} className="navbar-brand text-white btn btn-primary">
            Kaydol
          </button>
        </div>
      </nav>
     
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title">Yeni Görev Ekle</h5>
      <button type="button" className="btn-close" onClick={handleCloseModal}></button>
    </div>
    <div className="modal-body">
      <form className="mt-5">
        <div className="form-group">
          <label htmlFor="formTaskTitle" className="form-label">Görev Başlığı</label>
          <input type="text" className="form-control" id="taskname" placeholder="Görev başlığını giriniz" onChange={handleChangedTask} />
        </div>

        <div className="form-group">
          <label htmlFor="formTaskDescription" className="form-label">Görev Açıklaması</label>
          <textarea className="form-control" id="taskdescription" placeholder="Görev açıklamasını giriniz" rows="3" onChange={handleChangedTask}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="formTaskDeadline" className="form-label">Bitiş Tarihi</label>
          <input type="date" className="form-control" id="taskfinishdate" onChange={handleChangedTask} />
        </div>

        <div className="form-group">
          <label htmlFor="formTaskAssignedTo" className="form-label">Atandığı Kişi</label>
          <select className="form-control" id="taskassingned" onChange={handleChangedTask} multiple>
            <option>user1</option>
            <option>user2</option>
          </select>
        </div>
      </form>
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-warning" onClick={handleCloseModal}>İptal</button>
      <button type="button" className="btn btn-primary" onClick={addTask}>Kaydet</button>
      <button type="button" className="btn btn-primary" onClick={handleCloseModal}>Kapat</button>
    </div>
  </div>
</Modal>

    </div>
  );
}

export default Navbar;
