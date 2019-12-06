import React from 'react'
import { EXPERIENCES } from '~/consts/pages'
import { getCompanies } from '~/consts/experiences'
import Header from '~/views/components/experiences/Header'
import Container from '~/views/components/experiences/Container'
import List from '~/views/components/experiences/List'

const companiesLeftAndRight = getCompanies()

const Experiences = () => (
  <Container id={EXPERIENCES}>
    <div className="container">
      <Header>
        <h2>Experiences</h2>
        <h4>Jobs and side projects</h4>
      </Header>
      {companiesLeftAndRight.map((companies, index) => (
        <List key={index} companies={companies} />
      ))}
    </div>
  </Container>
)

export default Experiences
