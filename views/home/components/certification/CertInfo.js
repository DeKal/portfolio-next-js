import React from 'react'
import styled from 'styled-components/macro'
import Info from '~/views/home/components/certification/Info'
import Title from '~/views/home/components/certification/Title'
import { LEFT_INFO_POS } from '~/views/home/consts/certification'
import PropTypes from 'prop-types'
import { Translate } from 'react-localize-redux'
import Col from 'react-bootstrap/Col'

const CertInfo = ({ itemSelected, id, title, content }) => {
  return (
    <ShowOnSelectedCol sm={12} xs={12} itemselected={itemSelected} id={id}>
      <ListInfo id={id}>
        <Title>
          <span>{id}</span> &mdash; <Translate id={title} />
        </Title>
        <p>
          <Translate id={content} />
        </p>
      </ListInfo>
    </ShowOnSelectedCol>
  )
}

export default CertInfo

CertInfo.propTypes = {
  itemSelected: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string
}

const ListInfo = styled(Info)`
  position: relative;

  &::before,
  &::after {
    left: ${({ id }) => LEFT_INFO_POS[id - 1]};
  }
`

const ShowOnSelectedCol = styled(Col)`
  display: ${({ itemselected, id }) => (itemselected == id ? 'block' : 'none')};
`
