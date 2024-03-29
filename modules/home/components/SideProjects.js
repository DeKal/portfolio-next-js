import React from 'react'
import { getProjects } from '~/modules/home/consts/sideProject'
import Header from '~/modules/home/components/common/section/Header'
import SectionContainer from '~/modules/home/components/common/section/Container'
import List from '~/modules/home/components/sideProject/List'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Translate } from 'react-localize-redux'

const projectRows = getProjects()

const SideProjects = () => (
  <SectionContainer>
    <Container>
      <Header>
        <h2>
          <Translate id="SideProjects: Title" />
        </h2>
        <h4>
          <Translate id="SideProjects: SubTitle" />
        </h4>
      </Header>
      {projectRows.map((companies, index) => (
        <Row key={index}>
          <List companies={companies} />
        </Row>
      ))}
    </Container>
  </SectionContainer>
)

export default SideProjects
