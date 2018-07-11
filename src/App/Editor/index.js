import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {deleteLine, newLine, updateLine} from '../../actions/lines'
import Line from './Line'

class Editor extends PureComponent {
  render() {
    const {deleteLine, lines, newLine, updateLine} = this.props
    const renderLines = lines.map((line, i) => (
      <Line
        key={i}
        line={{
          ...line,
          number: i,
        }}
        lineNumber={i}
        onDeleteLine={deleteLine}
        onNewLine={newLine}
        onUpdateLine={updateLine}
      />
    ))

    return <div className="editor">{renderLines}</div>
  }
}

const mapStateToProps = state => ({
  lines: state.lines,
})

const mapDispatchToProps = dispatch => ({
  deleteLine: lineNumber => dispatch(deleteLine(lineNumber)),
  newLine: lineNumber => dispatch(newLine(lineNumber)),
  updateLine: (lineNumber, line) => dispatch(updateLine(lineNumber, line)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor)
