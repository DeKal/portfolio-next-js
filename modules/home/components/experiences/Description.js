import styled from 'styled-components/macro'

const Description = styled.p`
  margin-left: 80px;

  @media screen and (max-width: 700px) {
    margin-left: 0;
    text-align: justify;
  }
`

export default Description
