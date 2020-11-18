import { v4 as uuidv4 } from 'uuid'
import { ADD_TASK, DELETE_TASK, COMPLETE_TASK } from './type'


// Function to add a task
export const addTask = text => {
  return {
    type: ADD_TASK,
    task: {
      id: uuidv4(),
      text,
      isComplete: false
    }
  }
}


// Function to complete a task
export const completeTask = id => {
  return {
    type: COMPLETE_TASK,
    id
  }
}

// Function to delete a task
export const deleteTask = id => {
  return {
    type: DELETE_TASK,
    id
  }
}

