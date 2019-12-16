import React, { Fragment } from 'react'
import styled from 'styled-components/macro'
import CertIcon from '~/views/components/certification/CertIcon'
import Info from '~/views/components/certification/Info'
import Title from '~/views/components/certification/Title'
import Item from '~/views/components/certification/Item'
import { CERT_ACTIVE_ITEM } from '~/consts/certification'
import { leftInfo } from '~/consts/certification'
import { zIndexArr } from '~/consts/certification'
import { leftPos } from '~/consts/certification'
import PropTypes from 'prop-types'
import { Translate } from 'react-localize-redux'

const Cert_2 = ({ itemSelected, setSelectedItem, title, content, id }) => {
  return (
    <Fragment>
      <CertItem onClick={() => setSelectedItem(id)}>
        <CertIcon id={id} itemSelected={itemSelected} name="c" />
      </CertItem>

      <CertInfo itemSelected={itemSelected}>
        <Title>
          <span>{id}</span> &mdash; <Translate id={title} />
        </Title>
        <p>
          <Translate id={content} />
        </p>
      </CertInfo>
    </Fragment>
  )
}

export default Cert_2

Cert_2.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number
}

const CertItem = styled(Item)`
  left: ${leftPos[1]};
  z-index: ${zIndexArr[1]};
`

const CertInfo = styled(Info)`
  visibility: ${props =>
    props.itemSelected == CERT_ACTIVE_ITEM[1] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: ${props => (props.id = leftInfo[1])};
  }
`
