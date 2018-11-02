import React from 'react'
import styled from 'styled-components'

import clans from '../clans.json'
import { GridContainer } from './RouteList'
import ImageFriend from '../ImageFriend'

const Container = styled.section`
  font-family: 'helvetica neue', helvetica, sans-serif;
`

export default function RouteClan ({ match }) {
  const friends = clans[match.params.name].items
  document.title = `${match.params.name} - Friend Register`

  return (
    <Container>
      <h1>{match.params.name}</h1>
      <GridContainer>
        {friends.map(f => {
          return <ImageFriend f={f} key={f} input="" />
        })}
      </GridContainer>
    </Container>
  )
}
