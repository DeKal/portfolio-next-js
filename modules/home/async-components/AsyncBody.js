import React, { Fragment } from 'react'
import Experiences from '~/modules/home/components/Experiences'
import SideProjects from '~/modules/home/components/SideProjects'
import Certification from '~/modules/home/components/Certification'
import Project from '~/modules/home/components/Project'
import Contact from '~/modules/home/components/Contact'
import Footer from '~/modules/home/components/Footer'
import SlideIterator from '~/modules/core/components/SlideIterator'

const HomePage = () => (
  <Fragment>
    <Experiences />
    <SlideIterator>
      <SideProjects />
      <Project />
      <Certification />
      <Contact />
    </SlideIterator>
    <Footer />
  </Fragment>
)

export default HomePage
