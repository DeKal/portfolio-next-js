import React from 'react'
import styled from 'styled-components/macro'
import { CONTACTS } from '~/modules/home/consts/pages'
import Map from '~/modules/home/components/contact/Map'
import Content from '~/modules/home/components/contact/Content'
import Header from '~/modules/home/components/contact/Header'
import Container from 'react-bootstrap/Container'
import Anchor, {
  ANCHOR_DISTANCE_TO_TOP_OF_SECTION
} from '~/modules/home/components/common/Anchor'
import SectionContainer from '~/modules/home/components/common/section/Container'

const Contact = () => (
  <SectionContainer>
    <Anchor id={CONTACTS} top={ANCHOR_DISTANCE_TO_TOP_OF_SECTION} />
    <Container>
      <Card>
        <Header />
        <Content />
      </Card>
    </Container>
    <Map />
  </SectionContainer>
)

export default Contact

const Card = styled.section`
  z-index: 50;
  width: 75%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    float: none;
  }
`
