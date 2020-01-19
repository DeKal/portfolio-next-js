import styled from 'styled-components/macro'

export default styled.div`
  margin-top: ${props => props.theme.content.marginTop};
  font-size: ${props => props.theme.fontSizes.XXL};
  letter-spacing: ${props => props.theme.content.letterSpacing};
  line-height: ${props => props.theme.content.lineHeight};
  color: ${props => props.theme.colors.dark};
  font-family: ${props => props.theme.fonts.fontSerif};
`
