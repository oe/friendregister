import React from 'react'

export default class Friend extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.state.name = props.f
  }

  render () {
    return (
      <h2>{this.state.name}</h2>
    )
  }
}
