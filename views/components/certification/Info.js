import styled from 'styled-components/macro'

const Info = styled.li`
  position: absolute;
  top: 180px;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  margin: 40px 0 50px;
  padding: 10px;
  background-color: ${props => props.theme.colors.colorLight};
  border-top: 10px solid ${props => props.theme.colors.colorAccent};
  box-shadow: 2px 2px 4px -2px ${props => props.theme.colors.colorDark};

  @media screen and (max-width: 800px) {
    top: 160px;
  }

  @media screen and (max-width: 600px) {
    top: 140px;
  }

  @media screen and (max-width: 480px) {
    top: 120px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -40px;
    margin-left: -40px;
    border-bottom: 40px solid ${props => props.theme.colors.colorAccent};
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
  }

  &::after {
    content: '';
    position: absolute;
    top: -25px;
    margin-left: -27px;
    border-bottom: 27px solid ${props => props.theme.colors.colorLight};
    border-left: 27px solid transparent;
    border-right: 27px solid transparent;
  }
`
export default Info
