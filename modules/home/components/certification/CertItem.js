import React from 'react'
import CertIcon from '~/modules/home/components/certification/CertIcon'
import Item from '~/modules/home/components/certification/Item'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'

const CertItem = ({ itemSelected, setSelectedItem, idnum, name }) => {
  return (
    <Col sm={3} xs={3}>
      <Item
        data-test-id={`cert-item-${idnum}`}
        onClick={() => setSelectedItem(idnum)}
      >
        <CertIcon idnum={idnum} itemSelected={itemSelected} name={name} />
      </Item>
    </Col>
  )
}

export default CertItem

CertItem.propTypes = {
  itemSelected: PropTypes.number,
  setSelectedItem: PropTypes.func,
  idnum: PropTypes.number,
  name: PropTypes.string
}
