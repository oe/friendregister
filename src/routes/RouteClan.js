import React from 'react'
import styled from 'styled-components'

import clans from '../clans.json'
import { GridContainer } from './RouteList'
import ImageFriend from '../ImageFriend'

const Container = styled.section`
  font-family: 'helvetica neue', helvetica, sans-serif;
`

export default class RouteClan extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      params: props.match.params
    }
  }

  render () {
    const friends = clans[this.state.params.name]

    return (
      <Container>
        <h1>{this.state.params.name}</h1>
        <GridContainer>
          {friends.map(f => {
            return <ImageFriend f={f} key={f} input="" />
          })}
        </GridContainer>
      </Container>
    )
  }
}
