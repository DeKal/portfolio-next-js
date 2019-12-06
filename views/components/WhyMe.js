import React from 'react'
import styled from 'styled-components/macro'
import { WHYME } from '~/consts/pages'
import Title from '~/views/components/whyme/Title'
import Quote from '~/views/components/whyme/Quote'
import { Translate } from 'react-localize-redux'

const WhyMe = () => (
  <Container id={WHYME} className="container">
    <Inner className="whyme">
      <Title>
        <Translate id="Why me: Title" />
      </Title>
      <Quote>
        <Translate id="Why me: Quote" />
      </Quote>
    </Inner>
  </Container>
)

export default WhyMe

const Container = styled.section``

const Inner = styled.div`
  text-align: center;
  border-left: 10px solid ${props => props.theme.colors.colorAccent};
  border-right: 10px solid ${props => props.theme.colors.colorAccent};
  margin-top: 50px;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
  }
`
