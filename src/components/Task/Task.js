import { useTaskContext } from "../../context/taskContext";

const Task = ({ num, task }) => {
  const { deleteTask, toggleTask } = useTaskContext();
  console.log(task)

  return (
    <tr className="" onClick={() => toggleTask(task.task_id)}>
      <th>{num}</th>
      <td className={task.task_is_completed ? "line-through" : ""}>{task.task_text}</td>
      <td className="w-[1rem] max-w-lg content-start ">
        <button onClick={(e) => deleteTask(task.task_id)} className={"btn btn-primary"}>
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Task