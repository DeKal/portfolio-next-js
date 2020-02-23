import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import { Container, Row, Col } from 'react-bootstrap'

const Title = styled(Col)`
  margin-top: 0.54em;
  font-size: 30px;
`
const Summary = styled(Col)`
  margin-top: 0.46em;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.54);
  font-weight: 300;
`
const AllowedClickContainer = styled(Container)`
  cursor: pointer;
`

const Article = ({ header, brief, slug }) => (
  <AllowedClickContainer
    data-test-id="article-container"
    onClick={() => {
      document.location.href = `blogs/${slug}`
    }}
  >
    <Row>
      <Title>{header}</Title>
    </Row>
    <Row>
      <Summary>{brief}</Summary>
    </Row>
  </AllowedClickContainer>
)

Article.propTypes = {
  header: PropTypes.string,
  brief: PropTypes.string,
  slug: PropTypes.string
}

export default Article
