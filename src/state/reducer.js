import { ADD_TASK, ADD_TEXT, COMPLETE_TASK, DELETE_TASK } from './type'

export const initialState = { taskList: [], text: '' }


const reducer = (state, action) => {

  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [
          ...state.taskList,
          action.task
        ]
      }

    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(task => task.id !== action.id)
      }

    case COMPLETE_TASK: {
      const taskToComplete = state.taskList.findIndex(task => task.id === action.id)
      const newList = [...state.taskList]
      newList[taskToComplete] = {
        ...newList[taskToComplete],
        isComplete: true
      }
      return {
        ...state,
        taskList: newList
      }
    }
    
    case ADD_TEXT:
      return {
        ...state,
        text: action.text
      }

    default:
      return state
  }
}

export default reducer