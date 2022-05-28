import { useTaskContext } from "../../context/taskContext";

const Task = ({ task }) => {
  const { deleteTask, toggleTask } = useTaskContext();
  return (
    <div className="cursor-pointer bg-[#9999993d]" key={task.task_id} onClick={() => toggleTask(task.task_id)}>
      <h2>{task.task_text}</h2>
      {task.task_is_completed ? (
        <p>Completed</p>
      ) : (
        <p>Not Completed</p>
      )}
      <button onClick={() => { deleteTask(task.task_id) }}>Delete Task</button>
    </div>
  )
}

export default Task