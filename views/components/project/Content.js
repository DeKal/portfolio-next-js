import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Content = ({ children }) => (
  <NoPaddingContainer>
    <Row noGutters>{children}</Row>
  </NoPaddingContainer>
)

Content.propTypes = {
  children: PropTypes.any
}

export default Content

const NoPaddingContainer = styled(Container)`
  padding: 0;
`
