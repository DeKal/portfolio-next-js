import styled from 'styled-components/macro'

const Dates = styled.p`
  color: ${props => props.theme.colors.grey};
  margin-left: 80px;
  margin-bottom: 10px;

  @media screen and (max-width: 600px) {
    margin-left: 60px;
  }
`

export default Dates
