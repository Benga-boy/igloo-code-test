import React from 'react'

const TaskContainer = ({ taskList, handleComplete, handleDelete }) => {
  return (
    <div>
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
  )
}

export default TaskContainer
