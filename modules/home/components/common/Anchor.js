import styled from 'styled-components/macro'

const Anchor = styled.span`
  position: absolute;
  top: ${props => props.top || 0}px;
`

export const ANCHOR_DISTANCE_TO_TOP_OF_SECTION = -125

export default Anchor
