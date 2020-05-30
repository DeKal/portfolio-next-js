import styled from 'styled-components/macro'

const Title = styled.h4`
  margin-left: 80px;
  text-transform: uppercase;
  font-weight: bold;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    text-align: center;
  }
`
export default Title
