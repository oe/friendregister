import React from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import pkg from '../package.json'
import clans from './clans.json'

import RouteList from './routes/RouteList'
import RouteClan from './routes/RouteClan'

const Container = styled.main`
  max-width: 67em;
  margin: 0 auto;
`

const Small = styled.small`
  font-size: 1rem;
  margin-left: 1em;
`

const HeadingLink = styled(Link)`
  font-family: 'helvetica neue', helvetica, sans-serif;
  font-size: 2.25rem;
  color: #001f3f;
  text-decoration: none;
  transition: .25s color;

  :hover {
    color: #0074D9;
  }
`

const ClanContainer = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: repeat(4, [col] auto);
  justify-items: center;
  column-gap: 3rem;
  align-items: center;
`

const ClanLink = styled(Link)`
  margin: .5rem .5rem;
  text-decoration: none;
  font-family: 'helvetica neue', helvetica, sans-serif;
  background: ${props => props.bg || "black"};
  font-size: .875rem;
  color: ${props => props.fg || "white"};
  padding: .5rem 1rem;
  width: 100%;
  border-radius: .125rem;
  text-align: center; 
  transition: .25s opacity;

  :hover {
    opacity: 0.65;
  }
`

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const clanNames = Object.keys(clans)

    return (
      <BrowserRouter>
        <Container>
          <HeadingLink to="/">Friend Register<Small>version {pkg.version}</Small></HeadingLink>
          <ClanContainer>
            {clanNames.map(clan => {
              const item = clans[clan]
              return <ClanLink fg={item.fg} bg={item.bg} key={clan} to={`/clan/${clan}`}>{clan}</ClanLink>
            })}
          </ClanContainer>
          <Route exact path="/" component={RouteList} />
          <Route path="/clan/:name" component={RouteClan} />
        </Container>
      </BrowserRouter>
    )
  }
}
