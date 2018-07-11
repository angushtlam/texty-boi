import React, {Component, createRef} from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  value: PropTypes.string,
}

const defaultProps = {
  className: '',
  onBlur: () => {},
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

class Editable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value,
    }

    this.handleBlur = this.handleBlur.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.lineElement = createRef()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({value: nextProps.value}, this.forceUpdate)
    }
  }

  shouldComponentUpdate(nextProps) {
    const propKeys = Object.keys(propTypes).filter(
      propType => propType !== 'value'
    )

    return propKeys.some(propKey => {
      nextProps[propKey] !== this.props[propKey]
    })
  }

  handleBlur(event) {
    const {onChange, value} = this.props
    const newValue = sanitizeValue(this.lineElement.innerText)

    // Set the state when the field is blurred and the values are different.
    this.setState({newValue}, () => {
      if (value !== newValue) {
        onChange(event, newValue)
        this.forceUpdate()
      }
    })

    this.props.onBlur(event)
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
    const {value} = this.state

    return (
      <div
        className={this.props.className}
        contentEditable={true}
        dangerouslySetInnerHTML={{__html: value}}
        onBlur={this.handleBlur}
        onInput={this.handleChange}
        onKeyDown={this.handleKeyDown}
        ref={ref => (this.lineElement = ref)}
      />
    )
  }
}

Editable.defaultProps = defaultProps
Editable.propTypes = propTypes

export default Editable
