import React from 'react'
import styled from 'styled-components/macro'
import Container from 'react-bootstrap/Container'
import CardHeader from '~/modules/home/components/about/CardHeader'
import CardInfo from '~/modules/home/components/about/CardInfo'

const About = () => (
  <Section>
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
  margin-top: ${props => props.theme.aboutMarginTop};
`

const Card = styled.div`
  box-shadow: 2px 2px 4px -2px ${props => props.theme.colors.colorDark};
  z-index: 10;
  position: relative;
`
export default About
