import React from 'react'

const Form = ({ handleSubmit, task, handleInputChange }) => {
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Please add task: </label>
          <div className="control">
            <input className="input is-small" value={task} type="text" placeholder="Add task" onChange={handleInputChange} />
          </div>
        </div>
        <div className="control">
          <button className="button is-link">Add Task</button>
        </div>
      </form>
    </div>
  )
}

export default Form
