import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Container = ({ id, className, children }) => (
  <Style id={id} className={className}>
    {children}
  </Style>
)

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  id: PropTypes.any
}

export default Container

const Style = styled.section`
  position: relative;
  margin-top: 100px;
  padding-top: 25px;
  padding-bottom: 25px;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
  }
`
