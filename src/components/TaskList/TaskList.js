import Task from '../Task/Task'
import { useTaskContext } from '../../context/taskContext'
import { useEffect } from 'react';


const TaskList = () => {
  const { tasks } = useTaskContext()

  useEffect(() => {
    console.log("rendering task list")
    console.log(tasks)
  })


  return (
    <div className="overflow-x-auto max-w-[60rem] m-auto pt-5">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Number</th>
            <th>Todos</th>
            <th className='hidden w-1 sm:table-cell'>Creation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ?

            // if there is a task, render the task
            tasks.map((task, index) => {
              return <Task key={index} num={index} task={task} />
            })

            :
            // if there is no tasks in the list, show this message
            <tr><td colSpan="4">No Tasks</td></tr>
          }
        </tbody>
      </table>
    </div>
  )
}

export default TaskList