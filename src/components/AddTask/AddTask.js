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
    <form className="bg-green-800 fixed flex w-full h-[5vh] min-h-[4.5rem] sm:h-[5vh] px-4 rounded-lg bottom-0 grid-cols-3">
      <input
        type="text"
        placeholder="Add Task"
        value={task_text}
        onChange={(e) => handleChange(e)}
        className="flex-auto px-2 py-1 w-[80vw] rounded-l-lg bg-transparent border-transparent outline-none"
      />
      <button onClick={(e) => handleSubmit(e)} className={"flex-auto w-[20wv] outline-none"}>
        <BsFillPlusCircleFill className="text-white text-[2.3rem]" />
      </button>
    </form>
  );
};

export default AddTask;
