import React from 'react'
import styled from 'styled-components/macro'
import Info from '~/modules/home/components/certification/Info'
import Title from '~/modules/home/components/certification/Title'
import { LEFT_INFO_POS } from '~/modules/home/consts/certification'
import PropTypes from 'prop-types'
import { Translate } from 'react-localize-redux'
import Col from 'react-bootstrap/Col'

const CertInfo = ({ itemSelected, idnum, title, content }) => {
  return (
    <ShowOnSelectedCol
      sm={12}
      xs={12}
      itemselected={itemSelected}
      idnum={idnum}
    >
      <ListInfo idnum={idnum}>
        <Title>
          <span>{idnum}</span> &mdash; <Translate id={title} />
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
  idnum: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string
}

const ListInfo = styled(Info)`
  position: relative;
  z-index: 10;

  &::before,
  &::after {
    left: ${({ idnum }) => LEFT_INFO_POS[idnum - 1]};
  }
`

const ShowOnSelectedCol = styled(Col)`
  display: ${({ itemselected, idnum }) =>
    itemselected == idnum ? 'block' : 'none'};
`
