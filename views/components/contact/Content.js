import React from 'react'
import styled from 'styled-components/macro'
import Logo from '~/views/components/contact/Logo'
import Description from '~/views/components/contact/Description'
import Info from '~/views/components/contact/Info'
import Socials from '~/views/components/contact/Socials'

const Content = () => (
  <Container>
    <Logo />
    <Group>
      <Description />
      <Info />
      <Socials />
    </Group>
  </Container>
)

export default Content

const Container = styled.div`
  z-index: 50;
  position: relative;
  min-height: 300px;
  padding: 20px 60px 20px 20px;
  background-color: ${props => props.theme.colors.colorLight};
  overflow: hidden;
  white-space: nowrap;
  box-shadow: 2px 3px 3px -2px ${props => props.theme.colors.colorDark};
`
const Group = styled.div`
  display: inline-block;
  padding-left: 20px;
  white-space: normal;
  vertical-align: top;

  @media screen and (max-width: 800px) {
    padding-left: 0;
  }
`
