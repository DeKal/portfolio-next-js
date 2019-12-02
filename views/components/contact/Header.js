import React from 'react'
import styled from 'styled-components/macro'

const Header = () => (
  <Container className="contact-card__header">
    <h2>Contact information</h2>
    <h4>My pleasure to meet you!!</h4>
  </Container>
)

export default Header

const Container = styled.header`
  padding: 20px;
  background-color: ${props => props.theme.colors.colorAccent};
  color: ${props => props.theme.colors.colorLight};
`
