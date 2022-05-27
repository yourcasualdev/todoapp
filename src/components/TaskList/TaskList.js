import Task from '../Task/Task'

import { useTaskContext } from '../../context/taskContext'

const TaskList = () => {
  const { tasks } = useTaskContext()
  return (
    <div>
      {tasks.map((task) => {
        return <Task key={task.task_id} task={task} />
      }
      )}
    </div>
  )
}

export default TaskList