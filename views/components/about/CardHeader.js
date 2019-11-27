import * as React from 'react'
import styled from 'styled-components/macro'

const CardHeader = () => (
  <Header>
    <MainText>About me</MainText>
    <SubText>Well skip it if you&apos;re bored!!</SubText>
  </Header>
)

export default CardHeader

const Header = styled.header`
  padding: 20px;
  background-color: ${props => props.theme.colors.colorAccent};
`

const MainText = styled.h2`
  color: ${props => props.theme.colors.colorLight};
`

const SubText = styled.h4`
  /* no style */
`
