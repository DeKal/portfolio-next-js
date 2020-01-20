import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { INIT_SELECTED_LANG } from '~/views/home/consts/initState'
import { EN, VN } from '~/views/home/consts/langs'
import NavLink from '~/views/home/components/nav/NavLink'

const NavLang = () => {
  const [selectedLang, setSelectedLang] = useState(getSelectedLang())

  return (
    <NotSelectableDiv>
      <ul>
        <NavLinkItem>
          <NavLink
            lang={EN}
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
          />
          <InlineBlock>/</InlineBlock>
          <NavLink
            lang={VN}
            selectedLang={selectedLang}
            setSelectedLang={setSelectedLang}
          />
        </NavLinkItem>
      </ul>
    </NotSelectableDiv>
  )
}

const getSelectedLang = () => {
  return window.localStorage.getItem('lang') || INIT_SELECTED_LANG
}

export default NavLang

const NotSelectableDiv = styled.nav`
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
`

const NavLinkItem = styled.li`
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;

  @media screen and (max-width: 800px) {
    margin: 0 7px;
  }
`
const InlineBlock = styled.div`
  display: inline-block;
  padding: 5px;
`
