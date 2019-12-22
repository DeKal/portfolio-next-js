import React, { useState } from 'react'
import styled from 'styled-components/macro'
import CertItemDemo from '~/views/components/certification/CertItemDemo'
import { CERTIFICATIONS } from '~/consts/pages'
import { CERT_ACTIVE_ITEM } from '~/consts/certification'
import Container from '~/views/components/common/section/Container'
import Header from '~/views/components/common/section/Header'
import Anchor from '~/views/components/common/Anchor'
import Row from 'react-bootstrap/Row'
import BContainer from 'react-bootstrap/Container'

const Certification = () => {
  const [itemSelected, setSelectedItem] = useState(CERT_ACTIVE_ITEM[0])

  return (
    <WorkAroundContainer>
      <Anchor id={CERTIFICATIONS} top={-40} />
      <BContainer>
        <Header>
          <h2>Certifications and Prizes</h2>
        </Header>
        <List>
          <Row>
            <CertItemDemo
              itemSelected={itemSelected}
              setSelectedItem={setSelectedItem}
              id={CERT_ACTIVE_ITEM[0]}
              name="c"
            />
            <CertItemDemo
              itemSelected={itemSelected}
              setSelectedItem={setSelectedItem}
              id={CERT_ACTIVE_ITEM[1]}
              name="c"
            />
            <CertItemDemo
              itemSelected={itemSelected}
              setSelectedItem={setSelectedItem}
              id={CERT_ACTIVE_ITEM[2]}
              name="p"
            />
            <CertItemDemo
              itemSelected={itemSelected}
              setSelectedItem={setSelectedItem}
              id={CERT_ACTIVE_ITEM[3]}
              name="p"
            />
          </Row>
          {/* <Cert
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
          /> */}
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
