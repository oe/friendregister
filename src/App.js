import React from 'react'
import styled from 'styled-components'
import { space, maxWidth } from 'styled-system'

const Container = styled.main`
  ${space}
  ${maxWidth}
`

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      who: 'world'
    }
  }

  render () {
    return (
      <Container maxWidth="67em" m="0 auto">
        Hello {this.state.who}!
      </Container>
    )
  }
}
