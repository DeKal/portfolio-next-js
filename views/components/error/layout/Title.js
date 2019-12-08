import styled from 'styled-components/macro'

const Title = styled.h2`
  font-family: ${props => props.theme.fonts.fontSans};
  color: ${props => props.theme.colors.colorDark};
  font-size: ${props => props.theme.fontSizes.XXL};
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px;
`
export default Title
