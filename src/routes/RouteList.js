import React, { Fragment } from 'react'
import friends from '../friends.json'
import SearchBar from '../SearchBar'
import Friend from '../Friend'
import ImageFriend from '../ImageFriend'
import styled from 'styled-components'
import search from 'fuzzysearch'

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  justify-items: center;
  align-items: center;
  font-family: 'helvetica neue', helvetica, sans-serif;

  @media screen and (max-width: 60em) {
    grid-template-columns: 100%;
  }
`

export default class RouteList extends React.Component {
  constructor (props) {
    super(props)

    this.friendsList = friends
    this.state = {
      input: '',
      currentFriends: []
    }

    this.searchInput = this.searchInput.bind(this)
  }

  componentDidMount () {
    this.setState({
      currentFriends: friends
    })
  }

  searchInput (input) {
    const results = this.friendsList.filter(f => {
      return search(input.toLowerCase(), f.toLowerCase())
    })

    this.setState({
      input,
      currentFriends: results
    })
  }

  render () {
    let friendList
    if (this.state.currentFriends.length > 30) {
      friendList = this.state.currentFriends.map(friend => {
        return <Friend f={friend} key={friend} input={this.state.input} />
      })
    } else {
      friendList = this.state.currentFriends.map(friend => {
        return <ImageFriend f={friend} key={friend} input={this.state.input} />
      })
    }

    return (
      <Fragment>
        <SearchBar parentMethod={this.searchInput} />
        <GridContainer>{friendList}</GridContainer>
      </Fragment>
    )
  }
}
