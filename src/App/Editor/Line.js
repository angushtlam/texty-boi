import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import Editable from './Editable'

const propTypes = {
  line: PropTypes.object,
  lineNumber: PropTypes.number,
  onDeleteLine: PropTypes.func,
  onNewLine: PropTypes.func,
  onUpdateLine: PropTypes.func,
}

const defaultProps = {
  line: {
    skin: '',
    number: -1,
    value: '',
  },
  onDeleteLine: () => {},
  onNewLine: () => {},
  onUpdateLine: () => {},
}

class Line extends PureComponent {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleChange(_, value) {
    const {line, onUpdateLine} = this.props
    const newLine = {
      ...line,
      value,
    }

    if (value.startsWith('>')) {
      newLine['skin'] = 'quote'
    } else if (value.startsWith('##')) {
      newLine['skin'] = 'subheader'
    } else if (value.startsWith('#')) {
      newLine['skin'] = 'header'
    } else if (
      value.length > 1 &&
      value.startsWith('`') &&
      value.endsWith('`')
    ) {
      newLine['skin'] = 'code'
    } else {
      newLine['skin'] = null
    }

    onUpdateLine(line.number, newLine)
  }

  handleKeyDown(event) {
    const {line, onDeleteLine, onNewLine} = this.props

    // Keycode 8 is Backspace
    if (event.keyCode === 8 && !line.value) {
      onDeleteLine(line.number)

      // Keycode 13 is Enter.
    } else if (event.keyCode === 13) {
      onNewLine(line.number)
    }
  }

  render() {
    const {line} = this.props
    return (
      <div className={`line skin-${line.skin || 'none'}`}>
        <div className="number">{line.number + 1}</div>
        <Editable
          className="value"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          value={line.value}
        />
      </div>
    )
  }
}

Line.defaultProps = defaultProps
Line.propTypes = propTypes

export default Line
