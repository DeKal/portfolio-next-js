import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Header = ({ children }) => <Container>{children}</Container>

Header.propTypes = {
  children: PropTypes.any
}

export default Header

const Container = styled.header`
  padding-bottom: 50px;
  text-align: center;

  @media screen and (max-width: 800px) {
    padding-bottom: 30px;
  }
`
