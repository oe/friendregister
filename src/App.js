import React from 'react'
import styled from 'styled-components'
import { space, maxWidth } from 'styled-system'
import { BrowserRouter, Route } from 'react-router-dom'
import pkg from '../package.json'

import RouteList from './routes/RouteList'

const Container = styled.main`
  ${space}
  ${maxWidth}
`

const Small = styled.small`
  font-size: 1rem;
  margin-left: 1em;
`

const Heading1 = styled.h1`
  font-family: 'helvetica neue', helvetica, sans-serif;
  font-size: 2.25rem;
`

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <BrowserRouter>
        <Container maxWidth="67em" m="0 auto">
          <Heading1>Friend Register<Small>version {pkg.version}</Small></Heading1>
          <Route exact path="/" component={RouteList} />
        </Container>
      </BrowserRouter>
    )
  }
}
