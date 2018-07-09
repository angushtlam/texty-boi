import {DELETE_LINE, NEW_LINE, UPDATE_LINE} from '../actions/lines'

const lines = (
  state = [
    {value: 'what'},
    {value: 'hello'},
    {value: 'hello'},
    {value: 'hello'},
  ],
  action
) => {
  const lineNumber = action.lineNumber
  const newState = [...state]

  switch (action.type) {
    case DELETE_LINE:
      newState.splice(lineNumber, 1)
      return newState

    case NEW_LINE:
      newState.splice(lineNumber + 1, 0, {
        value: '',
      })
      return newState

    case UPDATE_LINE:
      newState[lineNumber] = {
        value: action.content,
        skin: action.skin,
      }
      return newState

    default:
      return state
  }
}

export default lines
