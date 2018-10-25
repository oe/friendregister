import React from 'react'
import styled from 'styled-components'
import { space, maxWidth } from 'styled-system'
import search from 'fuzzysearch'
import friends from './friends.json'

import Friend from './Friend'
import SearchBar from './SearchBar.js'
import ImageFriend from './ImageFriend.js'

const Container = styled.main`
  ${space}
  ${maxWidth}
`

const Heading1 = styled.h1`
  font-family: 'helvetica neue', helvetica, sans-serif;
  font-size: 2.25rem;
`

export default class App extends React.Component {
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
      <Container maxWidth="67em" m="0 auto">
        <Heading1>Friend Register</Heading1>
        <SearchBar parentMethod={this.searchInput} />
        {friendList}
      </Container>
    )
  }
}
