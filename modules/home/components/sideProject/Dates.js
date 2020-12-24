import styled from 'styled-components/macro'

const Dates = styled.p`
  color: ${props => props.theme.colors.grey};
  margin: 8px 0 10px 80px;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    text-align: center;
  }
`

export default Dates
