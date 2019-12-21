import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import NavLogo from '~/views/components/nav/NavLogo'
import NavItem from '~/views/components/nav/NavItem'
import MobileContainer from '~/views/components/common/container/MobileContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PAGE_LIST } from '~/consts/pages'
import {
  getSelectedSection,
  setJqueryScrollEvent,
  cleanUpScrollEvent,
  isSafari
} from '~/utils/helpers'

const NavContent = ({ isShowNavContent }) => {
  const [selectedPage, setSelectedPage] = useState(getSelectedSection())

  useEffect(() => {
    const handleHashChange = () => {
      setSelectedPage(getSelectedSection())
    }
    window.addEventListener('hashchange', handleHashChange)

    /*
     * Currently safari doesnt support smooth scrolling with scroll-behavior
     * This is a workaround by jquery for the case in Safari
     */
    isSafari() && setJqueryScrollEvent()

    return function cleanup() {
      window.removeEventListener('hashchange', handleHashChange, false)
      isSafari() && cleanUpScrollEvent()
    }
  })

  return (
    <NavContainer isShowNavContent={isShowNavContent}>
      <MobileContainer>
        <Row>
          <Col md={2}>
            <NavLogo />
          </Col>
          <Col fluid="true">
            <NavMenu>
              <ul>
                {PAGE_LIST.map(page => (
                  <NavLi key={page}>
                    <NavItem
                      page={page}
                      isSelected={selectedPage === page}
                      setSelectedPage={setSelectedPage}
                    />
                  </NavLi>
                ))}
              </ul>
            </NavMenu>
          </Col>
        </Row>
      </MobileContainer>
    </NavContainer>
  )
}

NavContent.propTypes = {
  isShowNavContent: PropTypes.bool
}

const NavContainer = styled.div`
  position: relative;
  min-height: ${props => props.theme.navContentMinHeight};
  background-color: ${props => props.theme.colors.colorLight};
  margin-top: ${props =>
    props.isShowNavContent
      ? props.theme.navHeaderHeight
      : `-${props.theme.navHeaderHeight}`};
  box-shadow: ${props => props.theme.extra.boxShadow};
  transition: all 0.5s;

  @media screen and (max-width: 800px) {
    margin-top: ${props =>
      props.isShowNavContent ? props.theme.navHeaderHeight : `-200px`};
  }
`
const NavMenu = styled.nav`
  text-align: right;

  @media screen and (max-width: 800px) {
    text-align: center;
  }
`
const NavLi = styled.li`
  display: inline-block;
  margin-left: 18px;

  @media screen and (max-width: 800px) {
    margin: 0 9px;
    display: block;
    border-bottom: 1px dashed ${props => props.theme.colors.colorDarken};
  }
`
export default NavContent
