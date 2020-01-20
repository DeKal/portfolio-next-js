import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Translate } from 'react-localize-redux'
import NavLogo from '~/modules/blogs/components/navbar/NavLogo'
import NavItem from '~/modules/blogs/components/navbar/NavItem'
import Search from '~/modules/blogs/components/navbar/Search'
import { PAGE_LIST } from '~/modules/blogs/consts/pages'
import { REDIRECT_LINK, LOGO_IMAGE } from '~/modules/blogs/consts/logo'

const NavBar = () => (
  <Fragment>
    <Navbar bg="light" variant="light">
      <Container>
        <NavLogo redirectLink={REDIRECT_LINK} image={LOGO_IMAGE} />
        <Nav className="mr-auto">
          {PAGE_LIST.map(page => (
            <NavItem key={page.name} href={page.url}>
              <Translate id={page.name} />
            </NavItem>
          ))}
        </Nav>
        <Search />
      </Container>
    </Navbar>
  </Fragment>
)

export default NavBar
