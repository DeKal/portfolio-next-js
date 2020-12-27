import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import NavLogo from '~/modules/home/components/nav/NavLogo'
import NavItem from '~/modules/home/components/nav/NavItem'
import MobileContainer from '~/modules/home/components/common/container/MobileContainer'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { PAGE_LIST } from '~/modules/home/consts/pages'
import {
  getSelectedSection,
  setJqueryScrollEvent,
  cleanUpScrollEvent,
  isSafari,
  initHashLocation
} from '~/modules/core/utils/helpers'
import useWindowDimensions from '~/modules/core/utils/useWindowDimensions'

const NavContent = ({ isShowNavContent }) => {
  const [selectedPage, setSelectedPage] = useState(getSelectedSection())
  const { width } = useWindowDimensions()
  useEffect(() => {
    const handleHashChange = () => {
      setSelectedPage(getSelectedSection())
    }
    window.addEventListener('hashchange', handleHashChange)
    initHashLocation()
    /*
     * Currently safari doesnt support smooth scrolling with scroll-behavior
     * This is a workaround by jquery for the case in Safari
     */
    if (isSafari()) {
      setJqueryScrollEvent()
    }

    return function cleanup() {
      window.removeEventListener('hashchange', handleHashChange, false)
      if (isSafari()) {
        cleanUpScrollEvent()
      }
    }
  }, [])

  return (
    <NavContainer isShowNavContent={isShowNavContent}>
      <MobileContainer>
        <Row>
          <Col lg={2}>
            <NavLogo />
          </Col>
          <MobileCol fluid="true">
            <NavMenu>
              <NavUl>
                {PAGE_LIST.map(
                  page =>
                    (width > 768 || page.isShowOnMobile) && (
                      <NavLi key={page.name}>
                        <NavItem
                          page={page}
                          isMobile={width <= 768}
                          isSelected={selectedPage === page.cmpName}
                          setSelectedPage={setSelectedPage}
                        />
                      </NavLi>
                    )
                )}
              </NavUl>
            </NavMenu>
          </MobileCol>
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

  @media screen and (max-width: 768px) {
    margin-top: ${props =>
      props.isShowNavContent
        ? props.theme.navHeaderHeight
        : props.theme.navPosWhenHiding};
    position: fixed;
    min-height: 0;
    width: 100%;
    bottom: 0;
    background: white;
    border-top: 1px solid ${props => props.theme.colors.colorAccent};
  }
`
const MobileCol = styled(Col)`
  @media screen and (max-width: 768px) {
    padding: 0 !important;
  }
`
const NavMenu = styled.nav`
  text-align: right;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

const NavUl = styled.ul`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-evenly;
  }
`
const NavLi = styled.li`
  display: inline-block;
  margin-left: 18px;

  @media screen and (max-width: 768px) {
    display: flex;
    margin: 8px;
    font-size: 13px;
  }
`
export default NavContent
