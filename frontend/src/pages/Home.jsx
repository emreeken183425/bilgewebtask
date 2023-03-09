import React, { useState } from "react";

function Home() {
  const [showUsers, setShowUsers] = useState(false);

  const handleTaskButtonClick = () => {
    setShowUsers(!showUsers);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 task bg-primary">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleTaskButtonClick}>{showUsers ? "Görevi Gizle" : "Görevi Görüntüle"}</button>
        </div>
        {showUsers && (
          <div className="d-block bg-info">
            <button type="button" className="btn btn-warning m-2">User1</button>
            <button type="button" className="btn btn-warning m-2">User2 </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
