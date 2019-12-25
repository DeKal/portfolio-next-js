import React, { useState } from 'react'
import styled from 'styled-components/macro'
import CertItem from '~/views/components/certification/CertItem'
import CertInfo from '~/views/components/certification/CertInfo'
import { CERTIFICATIONS } from '~/consts/pages'
import { ITEM, INFO } from '~/consts/certification'
import Header from '~/views/components/common/section/Header'
import Anchor from '~/views/components/common/Anchor'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import SectionContainer from '~/views/components/common/section/Container'
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
      </Container>
    </SectionContainer>
  )
}

export default Certification

const List = styled.ul`
  position: relative;
  list-style-type: none;
  height: 360px;
`
