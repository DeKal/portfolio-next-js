import React, { useState } from 'react'

import styled from 'styled-components/macro'
import NavHeader from '~/views/home/components/nav/NavHeader'
import NavContent from '~/views/home/components/nav/NavContent'
import { INIT_NAV_CONTENT_SHOW } from '~/views/home/consts/initState'

const Navbar = () => {
  const [isShowNavContent, switchNav] = useState(INIT_NAV_CONTENT_SHOW)

  return (
    <MainHeader>
      <NavHeader isShowNavContent={isShowNavContent} switchNav={switchNav} />
      <NavContent isShowNavContent={isShowNavContent} />
    </MainHeader>
  )
}

const MainHeader = styled.header`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: ${props => props.theme.navHeightWhenScrollingOnMobile};
`

export default Navbar
