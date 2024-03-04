import React from 'react'
import styled from 'styled-components/macro'
import Info from '~/modules/home/components/certification/Info'
import Title from '~/modules/home/components/certification/Title'
import PropTypes from 'prop-types'
import { Translate } from 'react-localize-redux'
import { Carousel } from 'react-bootstrap'
import useWindowDimensions from '~/modules/core/utils/useWindowDimensions'

const CertInfo = ({ cover, coverMobile, title, content, ...otherProps }) => {
  const { width } = useWindowDimensions()
  return (
    <Carousel.Item {...otherProps}>
      <Container>
        <Image
          className="d-block w-100 h-100"
          src={width <= 768 ? coverMobile : cover}
          alt={title}
        />
        <Carousel.Caption>
          <Info>
            <Title>
              <Translate id={title} />
            </Title>
            <Text>
              <Translate id={content} />
            </Text>
          </Info>
        </Carousel.Caption>
      </Container>
    </Carousel.Item>
  )
}

export default CertInfo

CertInfo.propTypes = {
  cover: PropTypes.string,
  coverMobile: PropTypes.string,
  itemSelected: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string
}

const Container = styled.div`
  height: 360px;

  @media screen and (max-width: 768px) {
    height: 250px;
  }
`

const Image = styled.img`
  object-fit: fill;
`
const Text = styled.p`
  font-size: 13px;

  a {
    font-size: 13px;
    color: white;
    text-decoration: underline;
  }
`
