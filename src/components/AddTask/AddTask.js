import React, { useState } from "react";
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
    <form className="fixed bottom-0 p-5 grid w-screen place-items-center z-50">
      <div className="">
        <input
          type="text"
          placeholder="Add Task"
          value={task_text}
          onChange={(e) => handleChange(e)}
          className="input input-bordered input-secondary w-50" />
        <button
          onClick={(e) => handleSubmit(e)} className={"btn btn-primary flex-1 ml-1"}
        >
          ADD
        </button>
      </div>
    </form>
  );
};

export default AddTask;
