import React, { Fragment } from 'react'

import Head from '~/views/components/Head'
import Nav from '~/views/components/Navbar'
import Home from '~/views/components/Home'
import About from '~/views/components/About'
import Experiences from '~/views/components/Experiences'
import WhyMe from '~/views/components/WhyMe'
// import Project from '~/views/components/Project'
// import Certification from '~/views/components/Certification'
import Contact from '~/views/components/Contact'
import Footer from '~/views/components/Footer'

const HomePage = () => (
  <Fragment>
    <Head />
    <Nav />
    <Home />
    <About />
    <Experiences />
    <WhyMe />
    {/* <Project />
    <Certification /> */}
    <Contact />
    <Footer />
  </Fragment>
)

export default HomePage
