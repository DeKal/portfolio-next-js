import React from 'react'
import { Translate } from 'react-localize-redux'
import Container from '~/views/components/common/section/Container'
import Header from '~/views/components/common/section/Header'
import Content from '~/views/components/project/Content'
import Item from '~/views/components/project/Item'
import { PROJECTS } from '~/consts/pages'
import Anchor from '~/views/components/common/Anchor'

const Project = () => (
  <Container>
    <Anchor id={PROJECTS} top={-40} />
    <Header>
      <h2>
        <Translate id="Project: Title" />
      </h2>
      <h4>
        <Translate id="Project: SubTitle" />
      </h4>
    </Header>
    <Content>
      <Item
        imgSrc="/images/projects/brand360.jpg"
        imgAlt="Brand 360"
        linkToWeb="http://brand360.vn/"
        hoverTitle="Brand360 project"
      />

      <Item
        imgSrc="/images/projects/anco.jpg"
        imgAlt="Report application for Masan"
        linkToWeb=""
        hoverTitle="Masan Report"
      />

      <Item
        imgSrc="/images/projects/taman.jpg"
        imgAlt="Tam An Web"
        linkToWeb="https://github.com/DeKal/Tam-An-Food-Store-Manager"
        hoverTitle="Tam An Web"
      />

      <Item
        imgSrc="/images/projects/2048.jpg"
        imgAlt="2048 Fun Games"
        linkToWeb="https://github.com/DeKal/2048"
        hoverTitle="2048 Fun Games"
      />
    </Content>
  </Container>
)

export default Project
