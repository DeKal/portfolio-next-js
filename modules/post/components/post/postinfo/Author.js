import styled from 'styled-components/macro'

export default styled.div`
  line-height: 20px;
  font-size: ${props => props.theme.fontSizes.gutter};
  color: ${props => props.theme.colors.dark};
  font-weight: 400;
  margin-bottom: 2px;
`
