import styled from 'styled-components/macro'
import Container from 'react-bootstrap/Container'

export default styled(Container)`
  margin-top: ${props => props.theme.postPaddingTop};
  padding: 35px;
  background-color: white;

  @media (min-width: 768px),
    @media (min-width: 992px),
    @media (min-width: 1200px) {
    max-width: 768px !important;
  }
`
