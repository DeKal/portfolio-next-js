import React from 'react'
import styled from 'styled-components/macro'

const Logo = () => <Container>☎️</Container>

const Container = styled.div`
  display: inline-block;
  color: ${props => props.theme.colors.colorAccent};
  font-size: 45px;
  line-height: 45px;
  letter-spacing: -5px;
  font-family: ${props => props.theme.fonts.fontSans};
  font-weight: bold;
  text-align: center;
  border: none;
  vertical-align: top;

  @media screen and (max-width: 800px) {
    display: none;
  }
`

export default Logo
