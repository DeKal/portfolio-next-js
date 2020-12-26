import styled from 'styled-components/macro'

const Info = styled.div`
  position: relative;
  opacity: 0.9;
  z-index: -1;
  display: block;
  width: 100%;
  padding: 10px;
  color: ${props => props.theme.colors.colorLight};
  background-color: ${props => props.theme.colors.colorDark};
  box-shadow: 2px 2px 4px -2px ${props => props.theme.colors.colorDark};
`
export default Info
