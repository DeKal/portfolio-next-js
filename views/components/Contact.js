import React from 'react'
import styled from 'styled-components/macro'
import { CONTACTS } from '~/consts/pages'
import Map from '~/views/components/contact/Map'
import Content from '~/views/components/contact/Content'
import Header from '~/views/components/contact/Header'
import Container from 'react-bootstrap/Container'
import Anchor from '~/views/components/common/Anchor'

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
  margin-left: calc((100% - calc(75% - 40px)) / 2);
  width: calc(75% - 40px);

  @media screen and (max-width: 800px) {
    width: calc(100% - 20px);
    margin-left: 10px;
    float: none;
  }
`
