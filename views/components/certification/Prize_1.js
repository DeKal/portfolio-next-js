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

const Prize_1 = ({ itemSelected, setSelectedItem, title, content, id }) => {
  return (
    <Fragment>
      <PrizeItem onClick={() => setSelectedItem(id)}>
        <CertIcon id={id} itemSelected={itemSelected} name="p" />
      </PrizeItem>

      <PrizeInfo itemSelected={itemSelected}>
        <Title>
          <span>{id}</span> &mdash; <Translate id={title} />
        </Title>
        <p>
          <Translate id={content} />
        </p>
      </PrizeInfo>
    </Fragment>
  )
}

export default Prize_1

Prize_1.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number
}

const PrizeItem = styled(Item)`
  left: ${leftPos[2]};
  z-index: ${zIndexArr[2]};
`

const PrizeInfo = styled(Info)`
  visibility: ${props =>
    props.itemSelected == CERT_ACTIVE_ITEM[2] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: ${props => (props.id = leftInfo[2])};
  }
`
