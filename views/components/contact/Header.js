import React from 'react'
import styled from 'styled-components/macro'
import { Translate } from 'react-localize-redux'

const Header = () => (
  <Container className="contact-card__header">
    <h2>
      <Translate id="Contact: Header 1" />
    </h2>
    <h4>
      <Translate id="Contact: Header 2" />
    </h4>
  </Container>
)

export default Header

const Container = styled.header`
  padding: 20px;
  background-color: ${props => props.theme.colors.colorAccent};
  color: ${props => props.theme.colors.colorLight};
`
