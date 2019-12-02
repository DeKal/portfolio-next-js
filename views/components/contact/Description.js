import React from 'react'
import styled from 'styled-components/macro'

const Description = () => (
  <Container>
    <p>Do you need a professional for lending a hand?</p>
    <p>Are you facing unfathomable problem?</p>
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
