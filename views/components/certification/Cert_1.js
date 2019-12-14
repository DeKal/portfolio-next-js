import React, { Fragment } from 'react'
import styled from 'styled-components/macro'
import CertIcon from '~/views/components/certification/CertIcon'
import Info from '~/views/components/certification/Info'
import Title from '~/views/components/certification/Title'
import Item from '~/views/components/certification/Item'
import { CERT_ACTIVE_ITEM } from '~/consts/certification'
import PropTypes from 'prop-types'
import { Translate } from 'react-localize-redux'

const Cert_1 = ({ itemSelected, setSelectedItem, title, content }) => {
  return (
    <Fragment>
      <Cert_1Item onClick={() => setSelectedItem(CERT_ACTIVE_ITEM[0])}>
        <CertIcon
          id={CERT_ACTIVE_ITEM[0]}
          itemSelected={itemSelected}
          name="c"
        />
      </Cert_1Item>

      <Cert_1Info itemSelected={itemSelected}>
        <Title>
          <span>{CERT_ACTIVE_ITEM[0]}</span> &mdash; <Translate id={title} />
        </Title>
        <p>
          <Translate id={content} />
        </p>
      </Cert_1Info>
    </Fragment>
  )
}

export default Cert_1

Cert_1.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string
}

const Cert_1Item = styled(Item)`
  left: 0%;
  margin-left: 0%;
  z-index: 40;
`

const Cert_1Info = styled(Info)`
  visibility: ${props =>
    props.itemSelected == CERT_ACTIVE_ITEM[0] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: 12.5%;
  }
`
