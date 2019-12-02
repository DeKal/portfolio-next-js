import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Icon = ({ name, className, children }) => (
  <Symbol className={className} name={name}>
    {children}
  </Symbol>
)

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element
}

export default Icon

const Symbol = styled.div`
  display: inline-block;

  &::before {
    font-family: ${props => props.theme.fonts.fontIp};
    font-style: normal;
    font-weight: normal;
    content: '${({ theme, name }) => theme.icons[name]}';
  }
`
