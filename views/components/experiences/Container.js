import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Container = ({ children }) => <Style>{children}</Style>

Container.propTypes = {
  children: PropTypes.element
}

export default Container

const Style = styled.section`
  padding-top: 100px;

  @media screen and (max-width: 800px) {
    padding-top: 50px;
  }
`
