import React from 'react'
import styled from 'styled-components/macro'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import NavLang from '~/views/components/nav/NavLang'
import PropTypes from 'prop-types'

const NavHeader = ({ isShowNavContent, switchNav }) => (
  <NavContainer className="first-nav">
    <div className="container">
      <NavLang />
      <NavControl
        data-test-id="switch-nav-content"
        className="first-nav__navcontrol"
        onClick={() => switchNav(!isShowNavContent)}
        href="#"
      >
        {!isShowNavContent ? <HamburgerIcon /> : <CloseIcon />} Menu
      </NavControl>
    </div>
  </NavContainer>
)

NavHeader.propTypes = {
  isShowNavContent: PropTypes.bool,
  switchNav: PropTypes.func
}

export default NavHeader

const NavContainer = styled.div`
  position: absolute;
  z-index: 200;
  top: 0;
  left: 0;
  height: ${props => props.theme.navHeaderHeight};
  overflow: hidden;
  background-color: ${props => props.theme.colors.colorAccent};
  box-shadow: ${props => props.theme.extra.boxShadow};
`

const NavControl = styled.a`
  color: ${props => props.theme.colors.colorLight};
  line-height: ${props => props.theme.navHeaderHeight};
  text-align: right;
  border: none;
  transition: color 0.5s;

  @media screen and (max-width: 600px) {
    margin-left: 0;
    font-size: 0;
  }

  &::before {
    display: inline-block;
    margin-right: 10px;
    color: ${props => props.theme.colors.colorLight};
    font-size: ${props => props.theme.fontSizes.XL};
    transition: color 0.5s;

    @media screen and (max-width: 600px) {
      margin-right: 0;
    }
  }

  &.is-open,
  &.is-closed {
    display: block;
  }

  &:hover,
  &:hover::before {
    color: ${props => props.theme.colors.colorDark};
  }
`

const HamburgerIcon = styled(GiHamburgerMenu)`
  display: inline;
  padding-bottom: 5px;
`

const CloseIcon = styled(MdClose)`
  display: inline;
  font-size: ${props => props.theme.fontSizes.XXL};
  font-weight: bolder;
  padding-bottom: 3px;
`
