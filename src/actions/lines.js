export const DELETE_LINE = 'DELETE_LINE'
export const NEW_LINE = 'NEW_LINE'
export const UPDATE_LINE = 'UPDATE_LINE'

export const deleteLine = lineNumber => ({
  type: DELETE_LINE,
  lineNumber,
})

export const newLine = lineNumber => ({
  type: NEW_LINE,
  lineNumber,
})

export const updateLine = (lineNumber, line) => ({
  type: UPDATE_LINE,
  line,
  lineNumber,
})
