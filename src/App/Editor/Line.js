import React from 'react'

class Line extends React.PureComponent {
  constructor() {
    super()
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(event) {
    const { newLine, lineNumber } = this.props

    if (event.key === 'Enter') {
      newLine(lineNumber)
    }
  }

  render() {
    const { content, skin } = this.props

    return (
      <div className={`line line-${skin}`}>
        <input value={content} onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}

export default Line
