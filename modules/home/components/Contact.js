import React from 'react'
import styled from 'styled-components/macro'
import { CONTACTS } from '~/modules/home/consts/pages'
import Map from '~/modules/home/components/contact/Map'
import Content from '~/modules/home/components/contact/Content'
import Header from '~/modules/home/components/contact/Header'
import Container from 'react-bootstrap/Container'
import Anchor from '~/modules/home/components/common/Anchor'

const Contact = () => (
  <Wrapper>
    <Anchor id={CONTACTS} top={-40} />
    <Container>
      <Card>
        <Header />
        <Content />
      </Card>
    </Container>
    <Map />
  </Wrapper>
)

export default Contact

const Wrapper = styled.div`
  position: relative;
  padding-top: 100px;
`
const Card = styled.section`
  z-index: 50;
  width: 75%;
  margin: 0 auto;

  @media screen and (max-width: 800px) {
    width: 100%;
    float: none;
  }
`
