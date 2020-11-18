import React, { Fragment, useReducer, useState } from 'react'
import reducer, { initialState } from '../state/reducer'
import { addTask, deleteTask, completeTask } from '../state/actions'
import Form from './Form'
import TaskContainer from './TaskContainer'



const Tasks = () => {
  const [text, setText] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)


  // Function to handle input change
  const handleInputChange = e => {
    setText(e.target.value)
  }


  // Function to handle submission of tasks
  const handleSubmit = e => {
    e.preventDefault()
    // Ensure task is not an empty string
    if (text !== '') {
      dispatch(addTask(text))
    }
    setText('')
  }

  // Function to delete a task from the list
  const handleDelete = id => {
    dispatch(deleteTask(id))
  }

  // Function to set your task to complete
  const handleComplete = id => {
    dispatch(completeTask(id))
  }


  // Pull taskList from state
  const taskList = state.taskList


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
              task = {text}
            />

            <div className="task-container">
              <TaskContainer 
                taskList={taskList}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
              />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Tasks
