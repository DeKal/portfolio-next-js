import React from 'react'
import { EXPERIENCES } from '~/modules/home/consts/pages'
import { COMPANIES } from '~/modules/home/consts/experiences'
import Header from '~/modules/home/components/common/section/Header'
import SectionContainer from '~/modules/home/components/common/section/Container'
import Experience from '~/modules/home/components/experiences/Experience'
import Container from 'react-bootstrap/Container'
import Anchor from '~/modules/home/components/common/Anchor'
import { Translate } from 'react-localize-redux'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import useWindowDimensions from '~/modules/core/utils/useWindowDimensions'

const Experiences = () => {
  const { width } = useWindowDimensions()
  return (
    <SectionContainer>
      <Anchor id={EXPERIENCES} top={-40} />
      <Container>
        <Header>
          <h2>
            <Translate id="Exp: Title" />
          </h2>
          <h4>
            <Translate id="Exp: SubTitle" />
          </h4>
        </Header>
        <VerticalTimeline animate={width > 1170}>
          {COMPANIES.map(({ name, icon }, index) => (
            <Experience company={name} icon={icon} key={index} />
          ))}
        </VerticalTimeline>
      </Container>
    </SectionContainer>
  )
}

export default Experiences
