import React from 'react'
import Highlighter from 'react-highlight-words'

export default class Friend extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: props.f.eng,
      input: props.input
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.input !== this.props.input) {
      this.setState({
        input: this.props.input
      })
    }
  }

  render () {
    return (
      <h2><Highlighter
        highlightClassName="hl"
        searchWords={this.state.input.split(' ')}
        autoEscape={true}
        textToHighlight={this.state.name}
      /></h2>
    )
  }
}
