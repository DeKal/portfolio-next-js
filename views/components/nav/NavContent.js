import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import NavLogo from '~/views/components/nav/NavLogo'
import NavItem from '~/views/components/nav/NavItem'
import { PAGE_LIST } from '~/consts/pages'
import { INIT_SELECTED_PAGE } from '~/consts/initState'

const NavContent = ({ isShowNavContent }) => {
  const [selectedPage, setSelectedPage] = useState(INIT_SELECTED_PAGE)

  return (
    <Container isShowNavContent={isShowNavContent} className="second-nav">
      <div className="container">
        <NavLogo />
        <NavMenu className="menu">
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
      </div>
    </Container>
  )
}

NavContent.propTypes = {
  isShowNavContent: PropTypes.bool
}

const Container = styled.div`
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
    margin-top: -100%;
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
