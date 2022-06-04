import React, { useState } from "react";
import { useTaskContext } from "../../context/taskContext";
import { BsFillPlusCircleFill } from 'react-icons/bs'

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
    <form className=" fixed bottom-0 w-screen grid place-items-center">
      <div className="flex">
        <input
          type="text"
          placeholder="Add Task"
          value={task_text}
          onChange={(e) => handleChange(e)}
          className="input input-bordered input-secondary w-[2000px] max-w-xs" />
        <button onClick={(e) => handleSubmit(e)} className={"btn btn-primary"}>
          ADD
        </button>
      </div>
    </form>
  );
};

export default AddTask;
