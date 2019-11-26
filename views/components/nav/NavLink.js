import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { EN } from '~/consts/langs'
import { Translate, withLocalize } from 'react-localize-redux'

const NavLink = ({
  lang,
  selectedLang,
  setSelectedLang,
  setActiveLanguage
}) => {
  return (
    <Container
      isSelected={selectedLang === lang}
      onClick={() => {
        setSelectedLang(lang)
        setActiveLanguage(lang)
        window.localStorage.setItem('lang', lang)
      }}
    >
      {lang === EN ? <Translate id="english" /> : <Translate id="vietnamese" />}
    </Container>
  )
}

NavLink.propTypes = {
  lang: PropTypes.string,
  selectedLang: PropTypes.string,
  setSelectedLang: PropTypes.func,
  setActiveLanguage: PropTypes.func
}

export default withLocalize(NavLink)

const Container = styled.a`
  color: ${props =>
    props.isSelected
      ? props.theme.colors.colorDark
      : props.theme.colors.colorLight};
  border: ${props => (props.isSelected ? 'none' : 'initial')};
  border-color: ${props => props.theme.colors.colorLight};
  font-family: ${props => props.theme.font};
  font-style: italic;
  line-height: ${props => props.theme.navHeaderHeight};
  transition: color 0.5s;

  &:hover {
    color: ${props => props.theme.colors.colorDark};
    border: none;
  }
`
