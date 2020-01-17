import Container from 'react-bootstrap/Container'
import styled from 'styled-components/macro'

const MobileContainer = styled(Container)`
  @media (max-width: 800px) {
    max-width: 100%;
  }
`

export default MobileContainer
