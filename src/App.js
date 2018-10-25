import React from 'react'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      who: 'world'
    }
  }

  render () {
    return (
      <h1>Hello {this.state.who}!</h1>
    )
  }
}
