import React, { Fragment } from 'react'
import styled from 'styled-components/macro'
import CertIcon from '~/views/components/certification/CertIcon'
import Info from '~/views/components/certification/Info'
import Title from '~/views/components/certification/Title'
import Item from '~/views/components/certification/Item'
import {
  CERT_ACTIVE_ITEM,
  LEFT_INFO_POS,
  ZINDEX,
  LEFT_POS
} from '~/consts/certification'
import PropTypes from 'prop-types'
import { Translate } from 'react-localize-redux'

const Cert = ({ itemSelected, setSelectedItem, title, content, id, name }) => {
  return (
    <Fragment>
      <CertItem id={id} onClick={() => setSelectedItem(id)}>
        <CertIcon id={id} itemSelected={itemSelected} name={name} />
      </CertItem>

      <CertInfo itemSelected={itemSelected} id={id}>
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

export default Cert

Cert.propTypes = {
  itemSelected: PropTypes.number,
  setSelectedItem: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string
}

const CertItem = styled(Item)`
  left: ${({ id }) => LEFT_POS[id - 1]};
  z-index: ${({ id }) => ZINDEX[id - 1]};
  ${({ id }) => id == CERT_ACTIVE_ITEM[0] && 'margin-left: 0%;'}
`

const CertInfo = styled(Info)`
  visibility: ${({ itemSelected, id }) =>
    itemSelected == id ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: ${({ id }) => LEFT_INFO_POS[id - 1]};
  }
`