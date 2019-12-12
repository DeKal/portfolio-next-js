import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Content = ({ children }) => <Container>{children}</Container>

Content.propTypes = {
  children: PropTypes.any
}

export default Content

const Container = styled.div`
  position: relative;
  width: 100%;
  clear: both;
  overflow: hidden;
`
