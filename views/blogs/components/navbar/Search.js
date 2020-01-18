import React from 'react'

import styled from 'styled-components/macro'

import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const Search = () => (
  <Container inline>
    <SearchBox type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-dark">Search</Button>
  </Container>
)

export default Search

const Container = styled(Form)`
  @media (max-width: 576px) {
    display: none;
  }
`
const SearchBox = styled(FormControl)`
  :focus {
    border-color: #343a40;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #343a40;
  }
`
