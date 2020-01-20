import React from 'react'
import { EXPERIENCES } from '~/modules/home/consts/pages'
import { getCompanies } from '~/modules/home/consts/experiences'
import Header from '~/modules/home/components/common/section/Header'
import SectionContainer from '~/modules/home/components/common/section/Container'
import List from '~/modules/home/components/experiences/List'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Anchor from '~/modules/home/components/common/Anchor'
import { Translate } from 'react-localize-redux'

const companyRows = getCompanies()

const Experiences = () => (
  <SectionContainer>
    <Anchor id={EXPERIENCES} top={-40} />
    <Container>
      <Header>
        <h2>
          <Translate id="Exp: Title" />
        </h2>
        <h4>
          <Translate id="Exp: SubTitle" />
        </h4>
      </Header>
      {companyRows.map((companies, index) => (
        <Row key={index}>
          <List companies={companies} />
        </Row>
      ))}
    </Container>
  </SectionContainer>
)

export default Experiences
