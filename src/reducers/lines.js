import {
  DELETE_LINE,
  NEW_LINE,
  UPDATE_LINE,
} from '../actions/lines'

const lines = (state = [
  {content: 'hello', skin: 'new'},
  {content: 'hello', skin: 'new'},
  {content: 'hello', skin: 'new'},
  {content: 'hello', skin: 'new'},
  {content: 'hello', skin: 'new'},
], action) => {
  const lineNumber = action.lineNumber
  const newState = [...state]
  
  switch (action.type) {
    case DELETE_LINE:
      newState.splice(lineNumber, 1)
      return newState
      
    case NEW_LINE:
      newState.splice(lineNumber + 1, 0, {
        content: '',
        skin: '',
      })
      return newState
      
    case UPDATE_LINE:
      newState[lineNumber] = {
        content: action.content,
        skin: action.skin,
      }
      return newState

    default:
      return state
  }
}

export default lines
