import React, { Fragment } from 'react'
import CertItem from '~/views/components/certification/CertItem'
import CertInfo from '~/views/components/certification/CertInfo'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'

const Cert = ({ itemSelected, setSelectedItem, title, content, id, name }) => {
  return (
    <Fragment>
      <Row>
        <CertItem
          itemSelected={itemSelected}
          setSelectedItem={setSelectedItem}
          id={id}
          name={name}
        />
      </Row>

      <Row>
        <CertInfo
          itemSelected={itemSelected}
          id={id}
          title={title}
          content={content}
        />
      </Row>
    </Fragment>
  )
}

export default Cert

Cert.propTypes = {
  itemSelected: PropTypes.number,
  setSelectedItem: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string
}
