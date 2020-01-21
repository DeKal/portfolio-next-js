import React from 'react'
import styled from 'styled-components/macro'
import Navbar from 'react-bootstrap/Navbar'
import PropTypes from 'prop-types'

const NavLogo = ({ redirectLink, image }) => (
  <Container href={redirectLink}>
    <Logo alt="logo" src={image} />
  </Container>
)

export default NavLogo

NavLogo.propTypes = {
  redirectLink: PropTypes.string,
  image: PropTypes.string
}

const Container = styled(Navbar.Brand)`
  height: 50px;
  width: 125px;
  display: flex;
  margin-right: 0;
  overflow: hidden;
`

const Logo = styled.img`
  width: 100%;
  height: 250%;
  align-self: center;
`
