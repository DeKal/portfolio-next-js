import React from 'react'
import { EXPERIENCES } from '~/consts/pages'
import { getCompanies } from '~/consts/experiences'
import Header from '~/views/components/common/Header'
import Container from '~/views/components/common/Container'
import List from '~/views/components/experiences/List'
import { Translate } from 'react-localize-redux'

const companiesLeftAndRight = getCompanies()

const Experiences = () => (
  <Container id={EXPERIENCES}>
    <div className="container">
      <Header>
        <h2>
          <Translate id="Exp: Title" />
        </h2>
        <h4>
          <Translate id="Exp: SubTitle" />
        </h4>
      </Header>
      {companiesLeftAndRight.map((companies, index) => (
        <List key={index} companies={companies} />
      ))}
    </div>
  </Container>
)

export default Experiences
