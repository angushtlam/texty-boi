import React from 'react'
import {connect} from 'react-redux'
// import {addLine} from '../../actions/lines'
import Line from './Line'

const Editor = ({addLine, lines}) => {
  console.log(lines)
  return (
    <div>
      {
        lines.map((line, i) => (
          <Line content={line.content} key={i} skin={line.skin} />
        ))
      }
    </div>
  )
}

const mapStateToProps = state => ({
  lines: state.lines,
})

const mapDispatchToProps = dispatch => ({
  addLine: () => dispatch(addLine()),
})

export default connect(mapStateToProps)(Editor)
