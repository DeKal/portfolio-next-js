import * as React from 'react'
import styled from 'styled-components/macro'

const CardInfo = () => (
  <Container>
    <p>
      Exposing to problem solving at a very young age, I passionate with
      disentangling sticky situations that can be occured in software engineer
      as well as real life. My little hobby is to find solution for competitive
      problems using optimized algorithm. I also have great interest in software
      architecture, and always seek to learn new things. Down to earth, I am
      human. I do find it interested to go cycling, jogging, reading books,
      listen to music, and stuffs that a normal human being would love to do.
    </p>
    <Quote>Where there&apos;s a will, there&apos;s a way</Quote>
    <p>
      I have the believe that all the problems in the world will be solved as
      long as you keep the positive mental attitude and a cold head.
    </p>
    <Status>
      <Bold>Current Status:</Bold> Available for Freelance job
    </Status>
  </Container>
)

export default CardInfo

const Container = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.colorLight};
`

const Quote = styled.blockquote`
  margin: 20px 0 20px 20px;
  font-family: ${props => props.theme.fonts.fontSerif};
  font-style: italic;
  font-size: ${props => props.theme.fonts.XL};
  font-weight: bold;
`
const Status = styled.p`
  margin-top: 20px;
  padding-top: ${props => props.theme.spaces.xxsmall};
  font-weight: normal;
  border-top: 1px dashed ${props => props.theme.colors.colorDarken};
`

const Bold = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`
