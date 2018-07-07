import * as React from 'react'
import { connect } from 'react-redux'
import { deleteLine, newLine } from '../../actions/lines'

class Editor extends React.Component {
  constructor() {
    super()
  }

  render() {}
}

const mapStateToProps = state => ({
  lines: state.lines,
})

const mapDispatchToProps = dispatch => ({
  deleteLine: lineNumber => dispatch(deleteLine(lineNumber)),
  newLine: lineNumber => dispatch(newLine(lineNumber)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)
