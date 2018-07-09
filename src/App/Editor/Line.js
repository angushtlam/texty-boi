import React, {Component, createRef} from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.string,
}

const defaultProps = {
  onChange: () => {},
  onKeyDown: () => {},
  value: '',
}

const sanitizeValue = value =>
  value
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .split('\n')
    .map(line => line.trim())
    .join('\n')
    .replace(/\n{3,}/g, '\n\n') // replace 3+ line breaks with two
    .trim()

class Line extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
    }

    this.lineElement = createRef()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({value: nextProps.value}, this.forceUpdate)
    }
  }

  shouldComponentUpdate(nextProps) {
    const propKeys = Object.keys(propTypes).filter(
      propType => propType != 'value'
    )

    return propKeys.some(propKey => {
      nextProps[propKey] !== this.props[propKey]
    })
  }

  handleBlur(event) {
    const value = sanitizeValue(this.lineElement.innerText)

    // Set the state when the field is blurred and the values are different.
    this.setState({value}, () => {
      this.props.onChange(event, value)
      this.forceUpdate()
    })
  }

  handleChange(event) {
    const value = sanitizeValue(this.lineElement.innerText)

    if (this.state.value !== value) {
      this.setState({value}, () => {
        this.props.onChange(event, value)
      })
    }
  }

  handleKeyDown(event) {
    // If the enter key is pressed, blur the element.
    if (event.keyCode === 13) {
      event.preventDefault()
      event.currentTarget.blur()
    }

    this.props.onKeyDown(event)
  }

  render() {
    const {skin} = this.props
    const {value} = this.state

    return (
      <div
        className={`line line-${skin}`}
        contentEditable={true}
        dangerouslySetInnerHTML={{__html: value}}
        onBlur={this.handleBlur.bind(this)}
        onInput={this.handleChange.bind(this)}
        onKeyDown={this.handleKeyDown.bind(this)}
        ref={ref => (this.lineElement = ref)}
      />
    )
  }
}

Line.defaultProps = defaultProps
Line.propTypes = propTypes

export default Line
