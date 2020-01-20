import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Header = ({ children }) => {
  return (
    <Container>
      <Style>{children}</Style>
    </Container>
  )
}

Header.propTypes = {
  children: PropTypes.string
}

export default Header

const Container = styled.div`
  height: 280px;
  position: relative;
  z-index: -1;

  @media only screen and (max-width: 767px) {
    height: 142px;
  }
`
const Style = styled.h1`
  @media only screen and (max-width: 767px) {
    font-size: 112px;
  }

  font-size: 230px;
  margin: 0;
  font-weight: 900;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background: url(/images/oops.jpg) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: center;
`
