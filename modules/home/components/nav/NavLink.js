import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { EN } from '~/modules/home/consts/langs'
import { Translate, withLocalize } from 'react-localize-redux'
import useWindowDimensions from '~/modules/core/utils/useWindowDimensions'

const NavLink = ({
  lang,
  selectedLang,
  setSelectedLang,
  setActiveLanguage
}) => {
  const { width } = useWindowDimensions()
  return (
    <Container
      isSelected={selectedLang === lang}
      onClick={() => {
        setSelectedLang(lang)
        setActiveLanguage(lang)
        window.localStorage.setItem('lang', lang)
      }}
    >
      {width < 600 ? (
        lang === EN ? (
          'en'
        ) : (
          'vn'
        )
      ) : lang === EN ? (
        <Translate id="english" />
      ) : (
        <Translate id="vietnamese" />
      )}
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
      : props.theme.colors.colorBlack};
  cursor: ${props => (props.isSelected ? 'default' : 'pointer')};
  text-decoration: ${props =>
    props.isSelected ? 'underline' : 'none'} !important;
  font-weight: ${props => (props.isSelected ? 'bold' : 'none')};
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
