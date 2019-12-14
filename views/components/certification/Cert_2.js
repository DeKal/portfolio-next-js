import React, { Fragment } from 'react'
import styled from 'styled-components/macro'
import CertIcon from '~/views/components/certification/CertIcon'
import Info from '~/views/components/certification/Info'
import Title from '~/views/components/certification/Title'
import Item from '~/views/components/certification/Item'
import { CERT_ACTIVE_ITEM } from '~/consts/certification'
import PropTypes from 'prop-types'
import { Translate } from 'react-localize-redux'

const Cert_2 = ({ itemSelected, setSelectedItem, title, content }) => {
  return (
    <Fragment>
      <Cert_2Item onClick={() => setSelectedItem(CERT_ACTIVE_ITEM[1])}>
        <CertIcon
          id={CERT_ACTIVE_ITEM[1]}
          itemSelected={itemSelected}
          name="c"
        />
      </Cert_2Item>

      <Cert_2Info itemSelected={itemSelected}>
        <Title>
          <span>{CERT_ACTIVE_ITEM[1]}</span> &mdash; <Translate id={title} />
        </Title>
        <p>
          <Translate id={content} />
        </p>
      </Cert_2Info>
    </Fragment>
  )
}

export default Cert_2

Cert_2.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string
}

const Cert_2Item = styled(Item)`
  left: 37.5%;
  z-index: 30;
`

const Cert_2Info = styled(Info)`
  visibility: ${props =>
    props.itemSelected == CERT_ACTIVE_ITEM[1] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: 37.5%;
  }
`
