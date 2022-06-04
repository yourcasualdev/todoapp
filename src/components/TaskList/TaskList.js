import Task from '../Task/Task'
import { useTaskContext } from '../../context/taskContext'
import List from '@mui/material/List';
import { useEffect } from 'react';


const TaskList = () => {
  const { tasks } = useTaskContext()

  useEffect(() => {
    console.log("rendering task list")
  })


  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>Number</th>
            <th>Todos</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return <Task key={index} num={index} task={task} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TaskList