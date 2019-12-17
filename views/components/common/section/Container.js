import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Container = ({ id, children }) => <Style id={id}>{children}</Style>

Container.propTypes = {
  children: PropTypes.any,
  id: PropTypes.any
}

export default Container

const Style = styled.section`
  padding-top: 100px;

  @media screen and (max-width: 800px) {
    padding-top: 50px;
  }
`
