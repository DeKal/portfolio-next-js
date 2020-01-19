import styled from 'styled-components/macro'

export default styled.h1`
  line-height: 48px;
  font-size: ${props => props.theme.header.fontSize};
  color: ${props => props.theme.colors.dark};
  font-weight: 400;
`
