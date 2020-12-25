import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Container from 'react-bootstrap/Container'

const Content = ({ children }) => (
  <NoPaddingContainer>{children}</NoPaddingContainer>
)

Content.propTypes = {
  children: PropTypes.any
}

export default Content

const NoPaddingContainer = styled(Container)`
  padding: 0;
  background: #e1e1d4;
`
