import React from 'react'
import styled from 'styled-components/macro'
import Container from 'react-bootstrap/Container'
import { WHYME } from '~/consts/pages'
import Title from '~/views/home/components/whyme/Title'
import Quote from '~/views/home/components/whyme/Quote'
import { Translate } from 'react-localize-redux'

const WhyMe = () => (
  <Section id={WHYME}>
    <Inner>
      <Title>
        <Translate id="Why me: Title" />
      </Title>
      <Quote>
        <Translate id="Why me: Quote" />
      </Quote>
    </Inner>
  </Section>
)

export default WhyMe
const Section = styled(Container)`
  position: relative;
`
const Inner = styled.div`
  text-align: center;
  margin-top: 50px;

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 15px;
    height: calc(100% - 15px);
  }

  &::before {
    left: 15px;
    border-left: 10px solid ${props => props.theme.colors.colorAccent};
  }

  &::after {
    left: -15px;
    border-right: 10px solid ${props => props.theme.colors.colorAccent};
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    margin-top: 30px;
  }
`
