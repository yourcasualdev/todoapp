import { useTaskContext } from "../../context/taskContext";

const Task = (task) => {
  const { delete_task } = useTaskContext();
  return (
    <div key={task.task_id}>
      <h2>{task.task_text}</h2>
      <button onClick={() => { delete_task(task.task_id) }}>Delete Task</button>
    </div>
  )
}

export default Task