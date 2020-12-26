import React from 'react'
import CertInfo from '~/modules/home/components/certification/CertInfo'
import { CERTIFICATIONS } from '~/modules/home/consts/pages'
import { INFO } from '~/modules/home/consts/certification'
import Header from '~/modules/home/components/common/section/Header'
import Anchor, {
  ANCHOR_DISTANCE_TO_TOP_OF_SECTION
} from '~/modules/home/components/common/Anchor'
import Container from 'react-bootstrap/Container'
import SectionContainer from '~/modules/home/components/common/section/Container'
import { Translate } from 'react-localize-redux'
import { Carousel } from 'react-bootstrap'

const Certification = () => (
  <SectionContainer>
    <Anchor id={CERTIFICATIONS} top={ANCHOR_DISTANCE_TO_TOP_OF_SECTION} />
    <Container>
      <Header>
        <h2>
          <Translate id="Certifications and Prizes" />
        </h2>
      </Header>
      <Carousel interval={2000}>
        {INFO.map((info, index) => (
          <CertInfo
            key={index}
            id={`cert-info-${index + 1}`}
            coverMobile={info.coverMobile}
            cover={info.cover}
            title={info.title}
            content={info.content}
          />
        ))}
      </Carousel>
    </Container>
  </SectionContainer>
)

export default Certification
