import styled from 'styled-components/macro'
import Container from 'react-bootstrap/Container'

export default styled(Container)`
  margin-top: 30px;

  @media (min-width: 768px),
    @media (min-width: 992px),
    @media (min-width: 1200px) {
    max-width: ${props => props.theme.postMaxWidth} !important;
  }
`
