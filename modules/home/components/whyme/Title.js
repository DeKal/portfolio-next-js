import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Title = ({ children }) => <Container>{children}</Container>

Title.propTypes = {
  children: PropTypes.element
}

export default Title

const Container = styled.h2`
  position: relative;
  margin-top: -15px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 15px;
    display: block;
    width: 30%;
    height: 5px;
    background-color: ${props => props.theme.colors.colorAccent};

    @media screen and (max-width: 960px) {
      width: 25%;
    }

    @media screen and (max-width: 600px) {
      width: 15%;
    }

    @media screen and (max-width: 480px) {
      width: 10%;
    }
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`
