import React from 'react'
import styled from 'styled-components/macro'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

const StartExp = () => (
  <VerticalTimelineElement
    iconStyle={{
      boxShadow: `0 0 0 3px rgb(16, 204, 82), inset 0 2px 0 rgb(16, 204, 82), 0 3px 0 4px rgb(16, 204, 82)`
    }}
    icon={<StartLogo />}
  />
)

export default StartExp

const StartLogo = () => (
  <Logo src={'/images/companies/start.png'} alt={'Start'} />
)

const Logo = styled.img`
  width: 100%;
`
