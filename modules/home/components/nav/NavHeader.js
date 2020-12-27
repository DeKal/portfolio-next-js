import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Translate } from 'react-localize-redux'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdClose } from 'react-icons/md'
import NavLang from '~/modules/home/components/nav/NavLang'
import MobileContainer from '~/modules/home/components/common/container/MobileContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NavHeader = ({ isShowNavContent, switchNav }) => (
  <NavContainer>
    <MobileContainer>
      <Row fluid="true">
        <Col xs={6}>
          <NavLang />
        </Col>
        <Col xs={6}>
          <NavControl
            data-test-id="switch-nav-content"
            onClick={() => switchNav(!isShowNavContent)}
          >
            {!isShowNavContent ? <HamburgerIcon /> : <CloseIcon />}{' '}
            <Translate id="Menu" />
          </NavControl>
        </Col>
      </Row>
    </MobileContainer>
  </NavContainer>
)

NavHeader.propTypes = {
  isShowNavContent: PropTypes.bool,
  switchNav: PropTypes.func
}

export default NavHeader

const NavContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: 200;
  top: 0;
  left: 0;
  height: ${props => props.theme.navHeaderHeight};
  overflow: hidden;
  background-color: ${props => props.theme.colors.colorAccent};
  box-shadow: ${props => props.theme.extra.boxShadow};
`

const NavControl = styled.div`
  color: ${props => props.theme.colors.colorDark};
  line-height: ${props => props.theme.navHeaderHeight};
  text-align: right;
  border: none;
  transition: color 0.5s;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    visibility: hidden;
  }

  &::before {
    display: inline-block;
    margin-right: 10px;
    color: ${props => props.theme.colors.colorDark};
    font-size: ${props => props.theme.fontSizes.XL};
    transition: color 0.5s;

    @media screen and (max-width: 600px) {
      margin-right: 0;
    }
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
