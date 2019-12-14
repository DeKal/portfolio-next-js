import React, { Fragment } from 'react'
import styled from 'styled-components/macro'
import CertIcon from '~/views/components/certification/CertIcon'
import Info from '~/views/components/certification/Info'
import Title from '~/views/components/certification/Title'
import Item from '~/views/components/certification/Item'
import { CERT_ACTIVE_ITEM } from '~/consts/certification'
import PropTypes from 'prop-types'
import { Translate } from 'react-localize-redux'

const Prize_2 = ({ itemSelected, setSelectedItem, title, content }) => {
  return (
    <Fragment>
      <PrizeItem onClick={() => setSelectedItem(CERT_ACTIVE_ITEM[3])}>
        <CertIcon
          id={CERT_ACTIVE_ITEM[3]}
          itemSelected={itemSelected}
          name="p"
        />
      </PrizeItem>

      <PrizeInfo itemSelected={itemSelected}>
        <Title>
          <span>{CERT_ACTIVE_ITEM[3]}</span> &mdash; <Translate id={title} />
        </Title>
        <p>
          <Translate id={content} />
        </p>
      </PrizeInfo>
    </Fragment>
  )
}

export default Prize_2

Prize_2.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string
}

const PrizeItem = styled(Item)`
  left: 87.5%;
  z-index: 10;
`

const PrizeInfo = styled(Info)`
  visibility: ${props =>
    props.itemSelected == CERT_ACTIVE_ITEM[3] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: 87.5%;
  }
`
