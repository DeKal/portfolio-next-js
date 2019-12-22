import React from 'react'
import styled from 'styled-components/macro'
import Icon from '~/views/components/common/Icon'
import PropTypes from 'prop-types'

const CertIcon = ({ id, itemSelected, name }) => {
  return itemSelected == id ? (
    <ActiveIcon name={name} />
  ) : (
    <InactiveIcon name={name} />
  )
}

CertIcon.propTypes = {
  id: PropTypes.number,
  itemSelected: PropTypes.any,
  name: PropTypes.string
}

export default CertIcon

const ItemIcon = styled(Icon)`
  top: 0;
  left: 50%;
  display: block;
  width: 180px;
  height: 180px;
  margin-left: -90px;
  text-align: center;
  background-color: ${props => props.theme.colors.colorLight};
  border: 1px solid ${props => props.theme.colors.colorLight};
  border-radius: 50%;
  box-shadow: 3px 4px 8px -4px ${props => props.theme.colors.colorDark};
  transition: all 0.5s;

  @media screen and (max-width: 800px) {
    width: 160px;
    height: 160px;
    margin-left: -80px;
  }

  @media screen and (max-width: 600px) {
    width: 140px;
    height: 140px;
    margin-left: -70px;
  }

  @media screen and (max-width: 480px) {
    width: 120px;
    height: 120px;
    margin-left: -60px;
  }

  &::before {
    font-family: ${props => props.theme.fonts.fontCert};
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 180px;
    color: ${props => props.theme.colors.colorLight};
    cursor: default;
    transition: all 0.5s;

    @media screen and (max-width: 800px) {
      font-size: 70px;
      line-height: 160px;
    }

    @media screen and (max-width: 600px) {
      font-size: 70px;
      line-height: 140px;
    }

    @media screen and (max-width: 480px) {
      font-size: 60px;
      line-height: 120px;
    }
  }
`

const InactiveIcon = styled(ItemIcon)`
  &::before {
    text-shadow: -1px -1px 0 ${props => props.theme.colors.colorDark},
      0 -1px 0 ${props => props.theme.colors.colorDark},
      1px -1px 0 ${props => props.theme.colors.colorDark},
      1px 0 0 ${props => props.theme.colors.colorDark},
      1px 1px 0 ${props => props.theme.colors.colorDark},
      0 1px 0 ${props => props.theme.colors.colorDark},
      -1px 1px 0 ${props => props.theme.colors.colorDark},
      -1px 0 0 ${props => props.theme.colors.colorDark};
  }
`

const ActiveIcon = styled(ItemIcon)`
  border-color: ${props => props.theme.colors.colorAccent};

  &::before {
    text-shadow: -1px -1px 0 ${props => props.theme.colors.colorAccent},
      0 -1px 0 ${props => props.theme.colors.colorAccent},
      1px -1px 0 ${props => props.theme.colors.colorAccent},
      1px 0 0 ${props => props.theme.colors.colorAccent},
      1px 1px 0 ${props => props.theme.colors.colorAccent},
      0 1px 0 ${props => props.theme.colors.colorAccent},
      -1px 1px 0 ${props => props.theme.colors.colorAccent},
      -1px 0 0 ${props => props.theme.colors.colorAccent};
  }
`
