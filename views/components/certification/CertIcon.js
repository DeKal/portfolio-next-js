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
  margin-left: 104%;
  text-align: center;
  background-color: ${props => props.theme.colors.colorLight};
  border: 1px solid ${props => props.theme.colors.colorLight};
  border-radius: 50%;
  box-shadow: 3px 4px 8px -4px ${props => props.theme.colors.colorDark};
  transition: all 0.5s;

  @media screen and (max-width: 992px) {
    width: 160px;
    height: 160px;
    margin-left: 35%;
  }

  @media screen and (max-width: 768px) {
    width: 125px;
    height: 125px;
    margin-left: 5%;
  }

  @media screen and (max-width: 576px) {
    width: 120px;
    height: 120px;
    margin-left: 20%;
  }

  @media screen and (max-width: 480px) {
    width: 90px;
    height: 90px;
    margin-left: 15%;
  }

  @media screen and (max-width: 375px) {
    width: 80px;
    height: 80px;
    margin-left: -53%;
  }

  @media screen and (max-width: 320px) {
    width: 70px;
    height: 70px;
    margin-left: -40%;
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

    @media screen and (max-width: 992px) {
      font-size: 70px;
      line-height: 160px;
    }

    @media screen and (max-width: 768px) {
      font-size: 63px;
      line-height: 127px;
    }

    @media screen and (max-width: 576px) {
      font-size: 56px;
      line-height: 114px;
    }

    @media screen and (max-width: 480px) {
      font-size: 47px;
      line-height: 88px;
    }

    @media screen and (max-width: 375px) {
      font-size: 40px;
      line-height: 79px;
    }

    @media screen and (max-width: 320px) {
      font-size: 35px;
      line-height: 71px;
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
