import React, { Fragment } from 'react'
import Nav from '~/views/components/Navbar'
import Home from '~/views/components/Home'
import About from '~/views/components/About'
import Experiences from '~/views/components/Experiences'
import WhyMe from '~/views/components/WhyMe'
import Certification from '~/views/components/Certification'
import Project from '~/views/components/Project'
import Contact from '~/views/components/Contact'
import Footer from '~/views/components/Footer'
import SlideIterator from '~/views/components/SlideIterator'
import Head from '~/views/components/Head'

const HomePage = () => (
  <Fragment>
    <Head />
    <Nav />
    <Home />
    <About />
    <SlideIterator>
      <Experiences />
      <WhyMe />
      <Project />
      <Certification />
      <Contact />
    </SlideIterator>
    <Footer />
  </Fragment>
)

export default HomePage
