import React, {Component} from 'react'
import {connect} from 'react-redux'
import Line from './Line'

class Editor extends Component {
  constructor() {
    super()
  }

  render() {
    const {lines} = this.props
    const renderLines = lines.map((line, i) => (
      <Line
        key={i}
        value={line.value}
        onChange={(_, value) => {
          console.log(value)
        }}
      />
    ))

    return <div>{renderLines}</div>
  }
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
