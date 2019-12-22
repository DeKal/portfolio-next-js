import React from 'react'
import CertItem from '~/views/components/certification/CertItem'
import PropTypes from 'prop-types'

const Cert = ({ itemSelected, setSelectedItem, id, name }) => {
  return (
    <CertItem
      itemSelected={itemSelected}
      setSelectedItem={setSelectedItem}
      id={id}
      name={name}
    />
  )
}

export default Cert

Cert.propTypes = {
  itemSelected: PropTypes.number,
  setSelectedItem: PropTypes.func,
  id: PropTypes.number,
  name: PropTypes.string
}
