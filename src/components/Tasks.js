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
    setTask('')
  }


  // Function to delete a task from the list
  const handleDelete = (id) => {
    // Simply return tasks where id not equals id of task to be deleted
    setTaskList(taskList.filter(task => task.id !== id))
  }

  // Function to set your task to complete
  const handleComplete = (id) => {
    const taskToComplete = taskList.findIndex(task => task.id === id)

    const newList = [...taskList]

    newList[taskToComplete] = {
      ...newList[taskToComplete],
      isComplete: true
    }

    setTaskList(newList)

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
            taskList.length > 0 ? (taskList.map(task => 
              <li key={task.id} className={task.isComplete ? 'cross' : null}> {task.text} 
                <button onClick={() => handleDelete(task.id)}>Delete</button>
                {
                  task.isComplete === false ? <button onClick={() => handleComplete(task.id)} >Complete</button> : null
                }
              </li>)) : null
          }
        </ul>
      </div>
      
    </Fragment>
  )
}

export default Tasks
