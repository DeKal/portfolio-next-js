import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import styled from 'styled-components/macro'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const StickyNav = () => (
  <Fragment>
    <Navbar bg="light" variant="light">
      <Container>
        <LogoWrapper href="/blogs">
          <Logo alt="logo" src="/images/logo.png" />
        </LogoWrapper>
        <Nav className="mr-auto">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/blogs">Blogs</NavItem>
        </Nav>
        <Form inline>
          <SearchBox type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </Container>
    </Navbar>
  </Fragment>
)

export default StickyNav

const LogoWrapper = styled(Navbar.Brand)`
  height: 50px;
  width: 125px;
  display: flex;
  margin-right: 0;
  overflow: hidden;
`

const Logo = styled.img`
  width: 100%;
  height: 250%;
  align-self: center;
`
const NavItem = styled(Nav.Link)`
  font-size: 18px;
`
const SearchBox = styled(FormControl)`
  :focus {
    border-color: #343a40;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #343a40;
  }
`
