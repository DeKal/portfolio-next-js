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
      <Prize_2Item onClick={() => setSelectedItem(CERT_ACTIVE_ITEM[3])}>
        <CertIcon
          id={CERT_ACTIVE_ITEM[3]}
          itemSelected={itemSelected}
          name="p"
        />
      </Prize_2Item>

      <Prize_2Info itemSelected={itemSelected}>
        <Title>
          <span>{CERT_ACTIVE_ITEM[3]}</span> &mdash; <Translate id={title} />
        </Title>
        <p>
          <Translate id={content} />
        </p>
      </Prize_2Info>
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

const Prize_2Item = styled(Item)`
  left: 87.5%;
  z-index: 10;
`

const Prize_2Info = styled(Info)`
  visibility: ${props =>
    props.itemSelected == CERT_ACTIVE_ITEM[3] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: 87.5%;
  }
`
