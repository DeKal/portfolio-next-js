import React, { Fragment } from 'react'
import Nav from '~/modules/home/components/Navbar'
import Home from '~/modules/home/components/Home'
import About from '~/modules/home/components/About'
import Head from '~/modules/home/components/Head'

import dynamic from 'next/dynamic'
const AsyncBody = dynamic(import('~/modules/home/async-components/AsyncBody'))

const HomePage = () => (
  <Fragment>
    <Head />
    <Nav />
    <Home />
    <About />
    <AsyncBody />
  </Fragment>
)

export default HomePage
