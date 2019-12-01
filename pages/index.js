import React, { Fragment } from 'react'

import Head from '~views/components/Head'
import Nav from '~/views/components/Navbar'
// import Home from '~/views/components/Home'
// import About from '~/views/components/About'
// import Service from '~/views/components/Service'
// import Project from '~/views/components/Project'
// import Certification from '~/views/components/Certification'
// import Contact from '~/views/components/Contact'
import Footer from '~/views/components/Footer'

const HomePage = () => (
  <Fragment>
    <Head />
    <Nav />
    {/* <Home />
    <About />
    <Service />
    <Project />
    <Certification />
    <Contact /> */}
    <Footer />
  </Fragment>
)

export default HomePage
