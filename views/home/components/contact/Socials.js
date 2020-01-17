import React from 'react'
import styled from 'styled-components/macro'
import Icon from '~/views/home/components/common/Icon'

const Socials = () => (
  <Container>
    <Item
      data-test-id="socials-fb-link"
      onClick={() => {
        changeLocation('https://www.facebook.com/dekal.dev')
      }}
    >
      <IconWrapper name="fb" />
    </Item>
    <Item
      data-test-id="socials-linkedin-link"
      onClick={() => {
        changeLocation('https://www.linkedin.com/in/phat-ho/')
      }}
    >
      <IconWrapper name="linkedin" />
    </Item>
  </Container>
)

const changeLocation = location => {
  window.location.href = location
}

export default Socials

const Container = styled.ul`
  position: absolute;
  width: 40px;
  height: 100%;
  top: 0;
  right: 0;
  list-style-type: none;
  background-color: ${props => props.theme.colors.colorDarken};
`
const Item = styled.li`
  display: block;
  text-align: center;
  overflow: hidden;
  background-color: ${props => props.theme.colors.colorDarken};
  border-top: 1px solid ${props => props.theme.colors.colorLight};

  &:hover {
    background-color: transparent;
  }
`

const IconWrapper = styled(Icon)`
  display: inline-block;
  color: ${props => props.theme.colors.colorLight};
  border: none;

  &::before {
    display: inline-block;
    text-align: center;
    font-size: 25px;
    line-height: 50px;
    color: ${props => props.theme.colors.colorLight};
  }

  &:hover::before {
    color: ${props => props.theme.colors.colorDark};
  }
`
