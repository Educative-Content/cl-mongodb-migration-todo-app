import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [task, setTask] = useState();
  const HandleAdd = () => {
    axios
      .post('http://localhost:3001/additem', { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create_form">
      <input
        type="text"
        placeholder="Enter an Item"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" id="button" onClick={HandleAdd}>
        Add Item
      </button>
    </div>
  );
}

export default Create;
