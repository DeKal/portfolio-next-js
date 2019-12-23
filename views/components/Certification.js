import React, { useState } from 'react'
import styled from 'styled-components/macro'
import CertItem from '~/views/components/certification/CertItem'
import CertInfo from '~/views/components/certification/CertInfo'
import { CERTIFICATIONS } from '~/consts/pages'
import { ITEM, INFO } from '~/consts/certification'
import Container from '~/views/components/common/section/Container'
import Header from '~/views/components/common/section/Header'
import Anchor from '~/views/components/common/Anchor'
import Row from 'react-bootstrap/Row'
import BContainer from 'react-bootstrap/Container'

const Certification = () => {
  const [itemSelected, setSelectedItem] = useState(1)

  return (
    <WorkAroundContainer>
      <Anchor id={CERTIFICATIONS} top={-40} />
      <BContainer>
        <Header>
          <h2>Certifications and Prizes</h2>
        </Header>
        <List>
          <Row>
            {ITEM.map((name, index) => (
              <CertItem
                key={index}
                itemSelected={itemSelected}
                setSelectedItem={setSelectedItem}
                id={index + 1}
                name={name}
              />
            ))}
          </Row>
          <Row>
            {INFO.map((info, index) => (
              <CertInfo
                key={index}
                itemSelected={itemSelected}
                id={index + 1}
                title={info.title}
                content={info.content}
              />
            ))}
          </Row>
        </List>
      </BContainer>
    </WorkAroundContainer>
  )
}

export default Certification

const List = styled.ul`
  position: relative;
  list-style-type: none;
  height: 360px;
`

/*
 * Note: This is the workaround solution, because this section hasn't been implemented with bootstrap
 * Refer to this issue: https://github.com/DeKal/portfolio-next-js/issues/78
 */
const WorkAroundContainer = styled(Container)``
