import styled from 'styled-components/macro'

const Anchor = styled.span`
  position: absolute;
  top: ${props => props.top || 0}px;
`

export default Anchor
