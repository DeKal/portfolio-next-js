import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Cert_1 from '~/views/components/certification/Cert_1'
import Cert_2 from '~/views/components/certification/Cert_2'
import Prize_1 from '~/views/components/certification/Prize_1'
import Prize_2 from '~/views/components/certification/Prize_2'
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
          <Cert_1
            itemSelected={itemSelected}
            setSelectedItem={setSelectedItem}
            title="CertResearch"
            content="CertContentResearch"
            id={CERT_ACTIVE_ITEM[0]}
          />
          <Cert_2
            itemSelected={itemSelected}
            setSelectedItem={setSelectedItem}
            title="CertDevelop"
            content="CertContentDevelop"
            id={CERT_ACTIVE_ITEM[1]}
          />
          <Prize_1
            itemSelected={itemSelected}
            setSelectedItem={setSelectedItem}
            title="CertDeploy"
            content="CertContentDeploy"
            id={CERT_ACTIVE_ITEM[2]}
          />
          <Prize_2
            itemSelected={itemSelected}
            setSelectedItem={setSelectedItem}
            title="CertDeliver"
            content="CertContentDeliver"
            id={CERT_ACTIVE_ITEM[3]}
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
