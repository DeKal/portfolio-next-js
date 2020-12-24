import styled from 'styled-components/macro'
import Icon from '~/modules/home/components/common/Icon'

const ExpIcon = styled(Icon)`
  display: block;

  &::before {
    float: left;
    padding-left: 16px;
    color: ${props => props.theme.colors.colorDarken};
    font-size: 45px;
    transition: color 0.5s;
    display: block;
  }

  &:hover::before {
    color: ${props => props.theme.colors.colorAccent};
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`
export default ExpIcon
