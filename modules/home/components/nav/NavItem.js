import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { Translate } from 'react-localize-redux'

const NavItem = ({
  page: { Icon, name, url },
  isSelected,
  isMobile,
  setSelectedPage
}) => {
  return isSelected ? (
    <SelectedContainer>
      {isMobile ? Icon : <Translate id={name} />}
    </SelectedContainer>
  ) : (
    <Container
      data-test-id="nav-link"
      href={url}
      onClick={() => {
        setSelectedPage(name)
      }}
    >
      {isMobile ? Icon : <Translate id={name} />}
    </Container>
  )
}

NavItem.propTypes = {
  page: PropTypes.shape({
    url: PropTypes.string,
    name: PropTypes.string,
    Icon: PropTypes.element
  }),
  isMobile: PropTypes.bool,
  isSelected: PropTypes.bool,
  setSelectedPage: PropTypes.func
}

export default NavItem

const Container = styled.a`
  line-height: ${props => props.theme.navContentMinHeight};
  font-size: ${props => props.theme.fontSizes.XL};
  transition: color 0.5s;

  &:hover {
    color: ${props => props.theme.colors.colorDarken};
    border: none;
  }

  @media screen and (max-width: 768px) {
    line-height: 2;
    border-bottom: none;
    font-size: 13px;
  }
`
const SelectedContainer = styled(Container)`
  color: ${props => props.theme.colors.colorDarken} !important;
  border: none;
`
