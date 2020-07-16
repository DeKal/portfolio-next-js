import React, { useState } from 'react'
import styled from 'styled-components/macro'
import CertItem from '~/modules/home/components/certification/CertItem'
import CertInfo from '~/modules/home/components/certification/CertInfo'
import { CERTIFICATIONS } from '~/modules/home/consts/pages'
import { ITEM, INFO } from '~/modules/home/consts/certification'
import Header from '~/modules/home/components/common/section/Header'
import Anchor from '~/modules/home/components/common/Anchor'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SectionContainer from '~/modules/home/components/common/section/Container'
import { Translate } from 'react-localize-redux'

const Certification = () => {
  const [itemSelected, setSelectedItem] = useState(1)

  return (
    <SectionContainer>
      <Anchor id={CERTIFICATIONS} top={-40} />
      <Container>
        <Header>
          <h2>
            <Translate id="Certifications and Prizes" />
          </h2>
        </Header>
        <List>
          <Row>
            {ITEM.map((name, index) => (
              <CertItem
                id={`cert-item-${index + 1}`}
                key={index}
                itemSelected={itemSelected}
                setSelectedItem={setSelectedItem}
                idNum={index + 1}
                name={name}
              />
            ))}
          </Row>
          <Row>
            {INFO.map((info, index) => (
              <CertInfo
                key={index}
                itemSelected={itemSelected}
                id={`cert-info-${index + 1}`}
                idNum={index + 1}
                title={info.title}
                content={info.content}
              />
            ))}
          </Row>
        </List>
      </Container>
    </SectionContainer>
  )
}

export default Certification

const List = styled.div`
  position: relative;
  height: 360px;
`
