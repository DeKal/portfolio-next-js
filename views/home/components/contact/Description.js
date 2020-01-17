import React from 'react'
import styled from 'styled-components/macro'
import { Translate } from 'react-localize-redux'

const Description = () => (
  <Container>
    <p>
      <Translate id="Contact: Description 1" />
    </p>
    <p>
      <Translate id="Contact: Description 2" />
    </p>
  </Container>
)

export default Description

const Container = styled.div`
  margin-bottom: 20px;
  font-style: italic;
  font-family: ${props => props.theme.fonts.fontSerif};

  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
`
