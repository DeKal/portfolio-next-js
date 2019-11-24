import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const NavItem = ({ page, isSelected, setSelectedPage }) => {
  return isSelected ? (
    <SelectedContainer>{page}</SelectedContainer>
  ) : (
    <Container
      href={`#${page}`}
      onClick={() => {
        setSelectedPage(page)
      }}
    >
      {page}
    </Container>
  )
}

NavItem.propTypes = {
  page: PropTypes.string,
  isSelected: PropTypes.bool,
  setSelectedPage: PropTypes.func
}

export default NavItem

const Container = styled.a`
  line-height: ${props => props.theme.navContentMinHeight};
  font-size: 20px;
  transition: color 0.5s;

  &:hover {
    color: ${props => props.theme.colors.colorDarken};
    border: none;
  }

  @media screen and (max-width: 800px) {
    font-size: 18px;
    line-height: 2;
    border-bottom: none;
  }
`
const SelectedContainer = styled(Container)`
  color: ${props => props.theme.colors.colorDarken};
  border: none;
`
