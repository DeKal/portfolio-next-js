import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Caption from '~/views/components/project/Caption'
import Col from 'react-bootstrap/Col'

const Item = ({ imgSrc, imgAlt, linkToWeb, hoverTitle }) => (
  <Col xs={12} sm={6} md={3}>
    <Container>
      <Image src={imgSrc} alt={imgAlt} />
      <Caption linkToWeb={linkToWeb} hoverTitle={hoverTitle} />
    </Container>
  </Col>
)

Item.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  linkToWeb: PropTypes.string,
  hoverTitle: PropTypes.any
}

export default Item

const Container = styled.figure`
  position: relative;
  height: 250px;
  width: 100%;
  padding-bottom: 18.75%;
  overflow: hidden;
  background: black;

  @media screen and (max-width: 1200px) {
    padding-bottom: 37.5%;
  }

  @media screen and (max-width: 480px) {
    padding-bottom: 75%;
  }

  &:hover figcaption {
    visibility: visible;
  }
`

const Image = styled.img`
  position: absolute;
  padding: 5px;
  top: 0;
  right: 0;
  left: 0;
  display: block;
  height: 100%;
  margin: 0 auto;
  max-width: 100%;
`
