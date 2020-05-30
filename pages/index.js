import React, { Fragment } from 'react'
import Nav from '~/modules/home/components/Navbar'
import Home from '~/modules/home/components/Home'
import About from '~/modules/home/components/About'
import Experiences from '~/modules/home/components/Experiences'
import SideProjects from '~/modules/home/components/SideProjects'
import WhyMe from '~/modules/home/components/WhyMe'
import Certification from '~/modules/home/components/Certification'
import Project from '~/modules/home/components/Project'
import Contact from '~/modules/home/components/Contact'
import Footer from '~/modules/home/components/Footer'
import SlideIterator from '~/modules/core/components/SlideIterator'
import Head from '~/modules/home/components/Head'

const HomePage = () => (
  <Fragment>
    <Head />
    <Nav />
    <Home />
    <About />
    <SlideIterator>
      <Experiences />
      <SideProjects />
      <WhyMe />
      <Project />
      <Certification />
      <Contact />
    </SlideIterator>
    <Footer />
  </Fragment>
)

export default HomePage
