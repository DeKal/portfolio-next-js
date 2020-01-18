import React, { Fragment } from 'react'
import Nav from '~/views/home/components/Navbar'
import Home from '~/views/home/components/Home'
import About from '~/views/home/components/About'
import Experiences from '~/views/home/components/Experiences'
import WhyMe from '~/views/home/components/WhyMe'
import Certification from '~/views/home/components/Certification'
import Project from '~/views/home/components/Project'
import Contact from '~/views/home/components/Contact'
import Footer from '~/views/home/components/Footer'
import SlideIterator from '~/views/core/components/SlideIterator'
import Head from '~/views/home/components/Head'

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
