import React from 'react'
import {connect} from 'react-redux'
import {
  deleteLine,
  newLine,
} from '../../actions/lines'
import Line from './Line'

const Editor = ({
  deleteLine,
  lines,
  newLine,
}) => {
  return (
    <div className="editor">
      {
        lines.map((line, i) => (
          <Line
            content={line.content}
            deleteLine={deleteLine}
            key={i}
            lineNumber={i}
            newLine={newLine}
            skin={line.skin}
          />
        ))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  lines: state.lines,
})

const mapDispatchToProps = dispatch => ({
  deleteLine: lineNumber => dispatch(deleteLine(lineNumber)),
  newLine: lineNumber => dispatch(newLine(lineNumber)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
