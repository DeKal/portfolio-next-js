import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavLogo from '~/views/blogs/components/navbar/NavLogo'
import NavItem from '~/views/blogs/components/navbar/NavItem'
import Search from '~/views/blogs/components/navbar/Search'

const NavBar = () => (
  <Fragment>
    <Navbar bg="light" variant="light">
      <Container>
        <NavLogo redirectLink="/blogs" image="/images/logo.png" />
        <Nav className="mr-auto">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/blogs">Blogs</NavItem>
        </Nav>
        <Search />
      </Container>
    </Navbar>
  </Fragment>
)

export default NavBar
