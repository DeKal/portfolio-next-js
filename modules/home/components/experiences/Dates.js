import styled from 'styled-components/macro'

const Dates = styled.p`
  color: ${props => props.theme.colors.grey};
  margin-left: 80px;
  margin-bottom: 10px;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    text-align: center;
  }
`

export default Dates
