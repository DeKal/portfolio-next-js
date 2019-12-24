import React from 'react'
import CertIcon from '~/views/components/certification/CertIcon'
import Item from '~/views/components/certification/Item'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'

const CertItem = ({ itemSelected, setSelectedItem, id, name }) => {
  return (
    <Col sm={3} xs={3}>
      <Item id={id} onClick={() => setSelectedItem(id)}>
        <CertIcon id={id} itemSelected={itemSelected} name={name} />
      </Item>
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
