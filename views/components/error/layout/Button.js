import styled from 'styled-components/macro'

const Button = styled.a`
  font-size: ${props => props.theme.fontSizes.M};
  text-decoration: none;
  text-transform: uppercase;
  background: ${props => props.theme.colors.colorAccent};
  display: inline-block;
  padding: 15px 30px;
  border-radius: 40px;
  color: ${props => props.theme.colors.colorLight};
  font-weight: 700;
  box-shadow: 0 4px 15px -5px ${props => props.theme.colors.colorAccent};
  border: none;
  margin: 10px;
  cursor: pointer;
`

export default Button
