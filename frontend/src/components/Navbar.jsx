import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [level, setLevel] = useState(0);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const navigate = useNavigate();

  const [task, setTask] = useState({
    taskname: "",
    taskdescription: "",
    taskfinishdate: "",
    taskassingned: "",
  });

  const handleLogin = (username) => {
    if (username === "admin") {
      setLevel(1);
    } else {
      setLevel(2);
    }
  };

  const handleChangedTask = (e) => {
    if (e.target.id === "taskassingned") {
      const options = e.target.options;
      const selectedValues = [];
      for (let i = 0; i < options.length; i++) {
        if (options[i].selected) {
          selectedValues.push(options[i].value);
        }
      }
      setTask({ ...task, taskassigned: selectedValues });
    } else {
      setTask({ ...task, [e.target.id]: e.target.value });
    }
  };

  const addTask = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/newtask",
        {
          taskname: task.taskname,
          taskdescription: task.taskdescription,
          taskfinishdate: task.taskfinishdate,
          taskassigned: task.taskassigned,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert(`The Task ${response.data.taskname} is added.`);
      setTask({
        taskname: "",
        taskdescription: "",
        taskfinishdate: "",
        taskassigned: "",
      });
      handleCloseModal();
    } catch (error) {
      console.log(error);
      alert("An error occurred while adding the task.");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark text-white ">
        <div className="container-md">
          <a className="navbar-brand text-white " href="/">
            Bilge Web{" "}
          </a>
        </div>
        <div className="navbar navbar-expand-lg bg-dark text-white">
          {level === 0 && (
            <button
              type="button"
              className="navbar-brand text-white btn btn-primary"
              onClick={handleShowModal}
            >
              Yeni G??rev Ekle
            </button>
          )}
          {level === 1 && (
            <button
              type="button"
              className="navbar-brand text-white btn btn-primary"
              onClick={handleShowModal}
            >
              Yeni G??rev Ekle
            </button>
          )}
          <button
            type="button"
            onClick={() => navigate("/alltask")}
            className="navbar-brand text-white btn btn-primary"
          >
            T??m G??revler
          </button>
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="navbar-brand text-white btn btn-primary"
          >
            Giri??
          </button>
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="navbar-brand text-white btn btn-primary"
          >
            Kaydol
          </button>
        </div>
      </nav>

      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Yeni G??rev Ekle</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
            ></button>
          </div>
          <div className="modal-body">
            <form className="mt-5">
              <div className="form-group">
                <label htmlFor="formTaskTitle" className="form-label">
                  G??rev Ba??l??????
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="taskname"
                  placeholder="G??rev ba??l??????n?? giriniz"
                  onChange={handleChangedTask}
                />
              </div>

              <div className="form-group">
                <label htmlFor="formTaskDescription" className="form-label">
                  G??rev A????klamas??
                </label>
                <textarea
                  className="form-control"
                  id="taskdescription"
                  placeholder="G??rev a????klamas??n?? giriniz"
                  rows="3"
                  onChange={handleChangedTask}
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="formTaskDeadline" className="form-label">
                  Biti?? Tarihi
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="taskfinishdate"
                  onChange={handleChangedTask}
                />
              </div>

              <div className="form-group">
                <label htmlFor="formTaskAssignedTo" className="form-label">
                  Atand?????? Ki??i
                </label>
                <select
                  className="form-control"
                  id="taskassigned"
                  onChange={handleChangedTask}
                  multiple
                >
                  <option>user1</option>
                  <option>user2</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-warning"
              onClick={handleCloseModal}
            >
              ??ptal
            </button>
            <button type="button" className="btn btn-primary" onClick={addTask}>
              Kaydet
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCloseModal}
            >
              Kapat
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Navbar;
