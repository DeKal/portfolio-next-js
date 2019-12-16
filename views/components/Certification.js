import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Cert from '~/views/components/certification/Cert'
import { CERTIFICATIONS } from '~/consts/pages'
import { CERT_ACTIVE_ITEM } from '~/consts/certification'
import Container from '~/views/components/common/section/Container'
import Header from '~/views/components/common/section/Header'

const Certification = () => {
  const [itemSelected, setSelectedItem] = useState(CERT_ACTIVE_ITEM[0])

  return (
    <Container id={CERTIFICATIONS}>
      <div className="container">
        <Header>
          <h2>Certifications and Prizes</h2>
        </Header>
        <List className="certification">
          <Cert
            itemSelected={itemSelected}
            setSelectedItem={setSelectedItem}
            title="CertResearch"
            content="CertContentResearch"
            id={CERT_ACTIVE_ITEM[0]}
            name="c"
          />
          <Cert
            itemSelected={itemSelected}
            setSelectedItem={setSelectedItem}
            title="CertDevelop"
            content="CertContentDevelop"
            id={CERT_ACTIVE_ITEM[1]}
            name="c"
          />
          <Cert
            itemSelected={itemSelected}
            setSelectedItem={setSelectedItem}
            title="CertDeploy"
            content="CertContentDeploy"
            id={CERT_ACTIVE_ITEM[2]}
            name="p"
          />
          <Cert
            itemSelected={itemSelected}
            setSelectedItem={setSelectedItem}
            title="CertDeliver"
            content="CertContentDeliver"
            id={CERT_ACTIVE_ITEM[3]}
            name="p"
          />
        </List>
      </div>
    </Container>
  )
}

export default Certification

const List = styled.ul`
  position: relative;
  list-style-type: none;
  height: 360px;
`
