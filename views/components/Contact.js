import React from 'react'
import styled from 'styled-components/macro'
import { CONTACTS } from '~/consts/pages'
import Map from '~/views/components/contact/Map'
import Content from '~/views/components/contact/Content'
import Header from '~/views/components/contact/Header'

const Contact = () => (
  <Container id={CONTACTS}>
    <div className="container">
      <Card>
        <Header />
        <Content />
      </Card>
    </div>
    <Map />
  </Container>
)

export default Contact

const Container = styled.div`
  position: relative;
  padding-top: 300px;

  @media screen and (max-width: 800px) {
    padding-top: 250px;
  }
`
const Card = styled.section`
  position: absolute;
  top: -200px;
  z-index: 50;
  margin-left: calc((100% - calc(75% - 40px)) / 2);
  box-shadow: 2px 2px 4px -2px ${props => props.theme.colors.colorDark};
  width: calc(75% - 40px);

  @media screen and (max-width: 800px) {
    width: calc(100% - 20px);
    margin-left: 10px;
    float: none;
  }
`
