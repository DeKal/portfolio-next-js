import React from 'react'
import { ABOUT } from '~/consts/pages'
import styled from 'styled-components/macro'
import Container from 'react-bootstrap/Container'
import CardHeader from '~/views/components/about/CardHeader'
import CardInfo from '~/views/components/about/CardInfo'
import Anchor from '~/views/components/common/Anchor'

const About = () => (
  <Section>
    <Anchor id={ABOUT} top={-150} />
    <Container>
      <Card>
        <CardHeader />
        <CardInfo />
      </Card>
    </Container>
  </Section>
)

const Section = styled.section`
  position: relative;
  margin-top: -200px;
`

const Card = styled.div`
  box-shadow: 2px 2px 4px -2px ${props => props.theme.colors.colorDark};
  z-index: 10;
  position: relative;
`
export default About
