import React from 'react'
import styled from 'styled-components/macro'
import Info from '~/modules/home/components/certification/Info'
import Title from '~/modules/home/components/certification/Title'
import { LEFT_INFO_POS } from '~/modules/home/consts/certification'
import PropTypes from 'prop-types'
import { Translate } from 'react-localize-redux'
import Col from 'react-bootstrap/Col'

const CertInfo = ({ itemSelected, idNum, title, content }) => {
  return (
    <ShowOnSelectedCol
      sm={12}
      xs={12}
      itemselected={itemSelected}
      idNum={idNum}
    >
      <ListInfo idNum={idNum}>
        <Title>
          <span>{idNum}</span> &mdash; <Translate id={title} />
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
  idNum: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string
}

const ListInfo = styled(Info)`
  position: relative;
  z-index: 10;

  &::before,
  &::after {
    left: ${({ idNum }) => LEFT_INFO_POS[idNum - 1]};
  }
`

const ShowOnSelectedCol = styled(Col)`
  display: ${({ itemselected, idNum }) =>
    itemselected == idNum ? 'block' : 'none'};
`
