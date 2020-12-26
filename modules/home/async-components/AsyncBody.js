import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'
import SlideIterator from '~/modules/core/components/SlideIterator'

import 'react-vertical-timeline-component/style.min.css'

const AsyncExperiences = dynamic(
  import('~/modules/home/components/Experiences')
)

const AsyncSideProjects = dynamic(
  import('~/modules/home/components/SideProjects')
)

const AsyncCertification = dynamic(
  import('~/modules/home/components/Certification')
)

const AsyncProject = dynamic(import('~/modules/home/components/Project'))

const AsyncContact = dynamic(import('~/modules/home/components/Contact'))

const AsyncFooter = dynamic(import('~/modules/home/components/Footer'))

const HomePage = () => (
  <Fragment>
    <AsyncExperiences />
    <SlideIterator>
      <AsyncSideProjects />
      <AsyncProject />
      <AsyncCertification />
      <AsyncContact />
    </SlideIterator>
    <AsyncFooter />
  </Fragment>
)

export default HomePage
