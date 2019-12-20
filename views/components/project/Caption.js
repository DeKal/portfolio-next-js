import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Icon from '~/views/components/common/Icon'

const Caption = ({ linkToWeb, hoverTitle }) => (
  <Container>
    <Link href={linkToWeb} rel="nofollow">
      <Icon name="link" />
      {hoverTitle}
    </Link>
  </Container>
)

Caption.propTypes = {
  linkToWeb: PropTypes.string,
  hoverTitle: PropTypes.any
}

export default Caption

const Container = styled.figcaption`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  white-space: nowrap;
  background-color: ${props => props.theme.colors.colorLight};
  opacity: 0.9;
  visibility: hidden;
  transition: opacity 0.5s;
  display: flex;
  align-items: center;
`

const Link = styled.a`
  display: inline-block;
  width: 100%;
  font-size: 25px;
  color: ${props => props.theme.colors.colorAccent};
  white-space: normal;
  border-bottom: none;

  @media screen and (max-width: 800px) {
    font-size: 20px;
  }

  &:hover {
    color: none;
  }
`
