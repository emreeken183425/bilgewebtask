import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllTask() {
  const [tasks, setTasks] = useState([]);
const navigate=useNavigate()
  useEffect(() => {
    axios
      .get("http://localhost:5000/task")
      .then((response) => setTasks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2 >Tüm Görevler</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Task Name</th>
            <th scope="col">Description</th>
            <th scope="col">Finish Date</th>
            <th scope="col">Assigned User</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.taskname}</td>
              <td>{task.taskdescription}</td>
              <td>{task.taskfinishdate}</td>
              <td>{task.taskassingned}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" class="btn btn-info mt-5" onClick={()=>navigate('/')} >ANA SAYFAYA</button>
     
    </div>
  );
}

export default AllTask;
