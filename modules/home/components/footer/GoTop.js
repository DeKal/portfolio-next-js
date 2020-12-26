import React from 'react'
import styled from 'styled-components/macro'
import Icon from '~/modules/home/components/common/Icon'
import { HOME } from '~/modules/home/consts/pages'

const GoTop = () => (
  <Container href={`#${HOME}`} aria-label="Home">
    <GoTopIcon name="goTop" />
  </Container>
)

export default GoTop

const Container = styled.a`
  color: ${props => props.theme.colors.colorDark};
  border-color: ${props => props.theme.colors.colorDark};
  transition: color 0.5s;

  &:hover {
    color: ${props => props.theme.colors.colorLight};
  }
`

const GoTopIcon = styled(Icon)`
  position: absolute;
  top: -20px;
  left: 50%;
  z-index: 200;
  display: block;
  width: 36px;
  height: 36px;
  margin-left: -15px;
  font-size: 0;
  border: none;
  overflow: hidden;
  color: ${props => props.theme.colors.colorDark};
  border-color: ${props => props.theme.colors.colorDark};
  transition: color 0.5s;

  &::before {
    font-size: 45px;
    line-height: 35px;
    color: ${props => props.theme.colors.colorDark};
    transition: color 0.5s;
  }

  &:hover {
    color: ${props => props.theme.colors.colorLight};

    &::before {
      color: ${props => props.theme.colors.colorLight};
    }
  }
`
