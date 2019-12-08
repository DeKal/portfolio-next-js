import React from 'react'
import { ABOUT } from '~/consts/pages'
import styled from 'styled-components/macro'
import CardHeader from '~/views/components/about/CardHeader'
import CardInfo from '~/views/components/about/CardInfo'

const About = () => (
  <Container id={ABOUT} className="container">
    <Card className="about-card">
      <CardHeader />
      <CardInfo />
    </Card>
  </Container>
)

const Container = styled.section`
  margin-top: -200px;
`

const Card = styled.div`
  box-shadow: 2px 2px 4px -2px ${props => props.theme.colors.colorDark};
  float: none;
  margin: 0 auto;
`
export default About
