import React from 'react'
import CertIcon from '~/modules/home/components/certification/CertIcon'
import Item from '~/modules/home/components/certification/Item'
import PropTypes from 'prop-types'
import Col from 'react-bootstrap/Col'

const CertItem = ({ itemSelected, setSelectedItem, idNum, name }) => {
  return (
    <Col sm={3} xs={3}>
      <Item
        data-test-id={`cert-item-${idNum}`}
        onClick={() => setSelectedItem(idNum)}
      >
        <CertIcon idNum={idNum} itemSelected={itemSelected} name={name} />
      </Item>
    </Col>
  )
}

export default CertItem

CertItem.propTypes = {
  itemSelected: PropTypes.number,
  setSelectedItem: PropTypes.func,
  idNum: PropTypes.number,
  name: PropTypes.string
}
