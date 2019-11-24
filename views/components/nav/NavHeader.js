import React from 'react'
import styled from 'styled-components/macro'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import PropTypes from 'prop-types'

const NavHeader = ({ isShowNavContent, switchNav }) => (
  <NavContainer className="first-nav">
    <div className="container">
      <nav className="first-nav__links">
        <ul>
          <NavLinkItem>
            <NavLink isSelected>english</NavLink>
          </NavLinkItem>
        </ul>
      </nav>
      <NavControl
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
  box-shadow: ${props => `0 1px 2px -1px ${props.theme.colors.colorDark}`};
`

const NavLinkItem = styled.li`
  display: inline-block;
  margin: 0 10px;

  @media screen and (max-width: 800px) {
    margin: 0 7px;
  }
`

const NavLink = styled.a`
  color: ${props =>
    props.isSelected
      ? props.theme.colors.colorDark
      : props.theme.colors.colorLight};
  border: ${props => (props.isSelected ? 'none' : 'initial')};
  border-color: ${props => props.theme.colors.colorLight};
  font-family: ${props => props.theme.fonts.fontSerif};
  font-style: italic;
  line-height: 40px;
  transition: color 0.5s;

  &:hover {
    color: ${props => props.theme.colors.colorDark};
    border: none;
  }
`
const NavControl = styled.a`
  color: ${props => props.theme.colors.colorLight};
  line-height: 40px;
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
    font-size: 20px;
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
  font-size: 25px;
  font-weight: bolder;
  padding-bottom: 3px;
`
