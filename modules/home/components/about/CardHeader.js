import * as React from 'react'
import styled from 'styled-components/macro'
import { Translate, withLocalize } from 'react-localize-redux'

const CardHeader = () => (
  <Header>
    <MainText>
      <Translate id="About me" />
    </MainText>
    <SubText>
      <Translate id="About Me: Subtext" />
    </SubText>
  </Header>
)

export default withLocalize(CardHeader)

const Header = styled.header`
  padding: 20px;
  background-color: ${props => props.theme.colors.colorAccent};
`

const MainText = styled.h2`
  color: ${props => props.theme.colors.colorLight};
`

const SubText = styled.h4`
  font-style: italic;
`
