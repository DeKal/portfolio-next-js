import React from 'react'
import styled from 'styled-components/macro'
import Info from '~/views/components/certification/Info'
import Title from '~/views/components/certification/Title'
import { LEFT_INFO_POS } from '~/consts/certification'
import PropTypes from 'prop-types'
import { Translate } from 'react-localize-redux'
import Col from 'react-bootstrap/Col'

const CertInfo = ({ itemSelected, id, title, content }) => {
  return (
    <Col>
      <ListInfo itemSelected={itemSelected} id={id}>
        <Title>
          <span>{id}</span> &mdash; <Translate id={title} />
        </Title>
        <p>
          <Translate id={content} />
        </p>
      </ListInfo>
    </Col>
  )
}

export default CertInfo

CertInfo.propTypes = {
  itemSelected: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string
}

const ListInfo = styled(Info)`
  visibility: ${({ itemSelected, id }) =>
    itemSelected == id ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: ${({ id }) => LEFT_INFO_POS[id - 1]};
  }
`
