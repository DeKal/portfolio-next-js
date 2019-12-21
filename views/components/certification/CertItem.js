import React from 'react'
import styled from 'styled-components/macro'
import CertIcon from '~/views/components/certification/CertIcon'
import Item from '~/views/components/certification/Item'
import { CERT_ACTIVE_ITEM, ZINDEX, LEFT_POS } from '~/consts/certification'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'

const CertItem = ({ itemSelected, setSelectedItem, id, name }) => {
  return (
    <Col>
      <ListItem id={id} onClick={() => setSelectedItem(id)}>
        <CertIcon id={id} itemSelected={itemSelected} name={name} />
      </ListItem>
    </Col>
  )
}

export default CertItem

CertItem.propTypes = {
  itemSelected: PropTypes.number,
  setSelectedItem: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string
}

const ListItem = styled(Item)`
  left: ${({ id }) => LEFT_POS[id - 1]};
  z-index: ${({ id }) => ZINDEX[id - 1]};
  ${({ id }) => id == CERT_ACTIVE_ITEM[0] && 'margin-left: 0%;'}
`
