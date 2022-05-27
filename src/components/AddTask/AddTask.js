import React, { useState, useEffect } from "react";
import { useTaskContext } from "../../context/taskContext";

const AddTask = () => {
  const { add_task } = useTaskContext();

  const [task_text, setTask_text] = useState("");

  const handleChange = (e) => {
    setTask_text(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    add_task(task_text);
    setTask_text("");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Add Task"
          value={task_text}
          onChange={(e) => handleChange(e)}
        />
        <button onClick={(e) => handleSubmit(e)}>Ekle</button>
      </form>
    </div>
  );
};

export default AddTask;
