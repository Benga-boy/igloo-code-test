import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Form from './Form'

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



  return (
    <Fragment>
      <section className="hero is-warning is-bold is-large">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              TO DO APP
            </h1>
            <br />
            <h2 className="subtitle">
              {`You have ${taskList.length} tasks in your list and ${taskList.length > 0 ? taskList.filter(task => task.isComplete === false).length : 0} incomplete tasks`}
            </h2>

            <Form 
              handleSubmit = {handleSubmit}
              handleInputChange = {handleInputChange}
              task = {task}
            />

            <div className="task-container">
              <h1 className="title">Task List: </h1>
              <ul>
                {
                  taskList.length > 0 ? (taskList.map(task =>
                    <li key={task.id}> 
                      <span className={`${task.isComplete ? 'cross' : null} subtitle`} >
                        {task.text}
                      </span>
                      <button className="button remove is-danger is-small" onClick={() => handleDelete(task.id)}>Delete</button>
                      {
                        task.isComplete === false ? <button className="button done is-success is-small" onClick={() => handleComplete(task.id)} >Complete</button> : null
                      }
                    </li>)) : null
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Tasks
