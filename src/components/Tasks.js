import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

// import { useInputValue } from '../hooks/hooks'

const Tasks = () => {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([])
  // const text = useInputValue('')



  // Function to handle input change
  const handleInputChange = (e) => {
    setTask(e.target.value)
  }


  // Function to handle submission of tasks
  const handleSubmit = (e) => {
    e.preventDefault()
    // Ensure task is not an empty string
    if (task !== '') {
      const tasks = {
        id: uuidv4(),
        text: task,
        isComplete: false
      }
      setTaskList([...taskList, tasks])
    }
    
  }


  console.log('taskList', taskList)


  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Task: </label>
          <div className="control">
            <input className="input is-small" value={task} type="text" placeholder="Add task" onChange={handleInputChange} />
          </div>
        </div>
        <div className="control">
          <button className="button is-link">Add Task</button>
        </div>
      </form>

      <div>
        <ul>
          {
            taskList.length > 0 ? (taskList.map(task => <li key={task.id}> {task.text} </li>)) : null
          }
        </ul>
      </div>
      
    </Fragment>
  )
}

export default Tasks
