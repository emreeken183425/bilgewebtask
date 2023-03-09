import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [showTasks, setShowTasks] = useState(false);
  const [showUserTasks, setShowUserTasks] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskButtonClick = () => {
    setShowTasks(!showTasks);
    setShowUserTasks(false);
  };

const navigate=useNavigate()
  const handleUserButtonClick = (user) => {
    setSelectedUser(user);
    setShowUserTasks(true);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/task")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error(error));
  }, []);

  const filteredTasks = showUserTasks
    ? tasks.filter((task) => task.taskassingned === selectedUser)
    : [];

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 task bg-primary">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleTaskButtonClick}
          >
            {showTasks ? "Görevi Gizle" : "Görevi Gör"}
          </button>
        </div>
        {showTasks && (
          <div className="d-block bg-info">
            <button
              type="button"
              className="btn btn-warning m-2"
              onClick={() => handleUserButtonClick("user1")}
            >
              User1
            </button>
            <button
              type="button"
              className="btn btn-warning m-2"
              onClick={() => handleUserButtonClick("user2")}
            >
              User2
            </button>
          </div>
        )}
      </div>
      {showTasks && showUserTasks && (
        <div>
          <h2>Görevler ({selectedUser})</h2>
          <table className="table">
  <thead>
    <tr>
      <th scope="col">Task Name</th>
      <th scope="col">Description</th>
      <th scope="col">Finish Date</th>
      <th scope="col">Assigned User</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {filteredTasks.map((task) => (
      <tr key={task._id}>
        <td>{task.taskname}</td>
        <td>{task.taskdescription}</td>
        <td>{task.taskfinishdate}</td>
        <td>{task.taskassingned}</td>
        <td>
          <button type="button" className="btn btn-info" onClick={()=>navigate('/detailpage')}>
            Detail
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

        </div>
      )}
      
    </div>
  );
}

export default Home;
