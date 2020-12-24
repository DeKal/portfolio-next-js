import styled from 'styled-components/macro'

const Description = styled.p`
  margin-left: 80px;
  margin-top: 15px;

  @media screen and (max-width: 1000px) {
    margin-left: 0;
    text-align: justify;
  }
`

export default Description
