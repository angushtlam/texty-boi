import {DELETE_LINE, NEW_LINE, UPDATE_LINE} from '../actions/lines'

const lines = (
  state = [
    {value: '# This is one texty boi', skin: 'header'},
    {
      value: '## Sending you /r e t r o f u t u r i s m v i b e s/',
      skin: 'subheader',
    },
    {
      value:
        'Why would you want a productive text editor when you can have *skins*',
    },
    {value: ''},
    {value: '> mfw supports greentext', skin: 'quote'},
    {value: '> now you have to use it', skin: 'quote'},
    {value: ''},
    {value: '`super.hacker.mode.nil? = false`', skin: 'code'},
    {value: ''},
    {value: ''},
    {value: ''},
    {value: ''},
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
      newState[lineNumber] = action.line
      return newState

    default:
      return state
  }
}

export default lines
