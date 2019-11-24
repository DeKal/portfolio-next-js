import * as React from 'react'
import styled from 'styled-components/macro'

const NavLogo = () => (
  <Logo>
    <LogoText>JD</LogoText>
  </Logo>
)

export default NavLogo

const Logo = styled.a`
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  width: ${props => props.theme.navContentMinHeight};
  color: ${props => props.theme.colors.colorLight};
  font-size: 40px;
  line-height: ${props => props.theme.navContentMinHeight};
  font-family: ${props => props.theme.fonts.fontSans};
  letter-spacing: -5px;
  font-weight: bold;
  text-align: center;
  background-color: ${props => props.theme.colors.colorAccent};
  border: none;

  @media screen and (max-width: 960px) {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -29px;
    left: 0;
    z-index: 250;
    border-top: 30px solid ${props => props.theme.colors.colorAccent};
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
  }
`

const LogoText = styled.span`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: -2px;
    width: 50px;
    height: 5px;
    background-color: transparent;
    box-shadow: 0 1px 2px -1px ${props => props.theme.colors.colorDark};
    transform: rotate(-37deg);
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -15px;
    left: -2px;
    width: 50px;
    height: 5px;
    background-color: transparent;
    box-shadow: 0 1px 2px -1px ${props => props.theme.colors.colorDark};
    transform: rotate(37deg);
  }
`
