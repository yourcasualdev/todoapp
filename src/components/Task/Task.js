import { useTaskContext } from "../../context/taskContext";

const Task = ({ num, task }) => {
  const { deleteTask, toggleTask, updateTask } = useTaskContext();
  const creationDate = new Date(task.task_date);

  return (
    <tr onClick={() => toggleTask(task.task_id)} className="max-w-xs">

      {/* Task Number */}
      <th className="w-[10px] z-0">{num + 1}</th>

      {/* Task Text */}
      <td
        className={`${task.task_is_completed ? "line-through" : ""} max-w-[1rem] text-w truncate cursor-pointer`}>
        <h2>{task.task_text}</h2>
      </td>

      {/* Task Creation Date */}
      <td className="hidden sm:table-cell">
        {creationDate.toLocaleDateString()}
      </td>

      {/* Task Actions */}
      <td className="w-[1rem] max-w-lg content-start ">
        <label htmlFor={task.task_id} className="btn modal-button">More</label>
        <input type="checkbox" id={task.task_id} className="modal-toggle" />
        <label htmlFor={task.task_id} className="modal cursor-pointer">
          <label className="modal-box relative grid" htmlFor="">
            <h3 className="text-lg font-bold">Congratulations random Interner user!</h3>
            <textarea onChange={(e) => updateTask(task.task_id, e.target.value)} className="py-4 mt-5 mb-2" value={task.task_text} />
            <div className="flex m-auto ">
              <button onClick={() => toggleTask(task.task_id)} className={"btn btn-primary mr-2"}>
                {task.task_is_completed ? "Uncomplete" : "Complete"}
              </button>
              <button onClick={(e) => deleteTask(task.task_id)} className={"btn btn-error"}>
                Delete
              </button>
            </div>
          </label>
        </label>
      </td>
    </tr>
  )
}

export default Task