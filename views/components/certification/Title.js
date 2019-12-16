import styled from 'styled-components/macro'

const Title = styled.h3`
  margin-bottom: 10px;

  & span {
    color: ${props => props.theme.colors.colorDarken};
  }
`

export default Title
