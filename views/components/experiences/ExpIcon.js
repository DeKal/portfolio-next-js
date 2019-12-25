import styled from 'styled-components/macro'
import Icon from '~/views/components/common/Icon'

const ExpIcon = styled(Icon)`
  display: block;

  &::before {
    margin-top: 30px;
    float: left;
    color: ${props => props.theme.colors.colorDarken};
    font-size: 60px;
    transition: color 0.5s;
    display: block;

    @media screen and (max-width: 600px) {
      font-size: 45px;
    }
  }

  &:hover::before {
    color: ${props => props.theme.colors.colorAccent};
  }
`
export default ExpIcon
