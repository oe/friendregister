import React from 'react'
import styled from 'styled-components'

const Search = styled.input`
  font-size: 1.5rem;
`

export default class SearchBar extends React.Component {
  constructor (props) {
    super(props)

    this.parentMethod = props.parentMethod
    this.state = {
      input: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({
      input: evt.currentTarget.value
    }, () => {
      this.parentMethod(this.state.input)
    })
  }

  render () {
    return (
      <Search placeholder="Search..." value={this.state.input} onChange={this.handleChange} />
    )
  }
}
