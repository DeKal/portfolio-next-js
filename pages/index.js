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
import Head from 'next/head'

const HomePage = () => (
  <Fragment>
    <Head>
      <title>Portfolio | Phat Ho</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href="https://phatho-folio.now.sh/" />
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="portfolio, dekal, software engineer, freelancer, cv, work"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="DeKal | Portfolio" />
      <meta property="og:description" content="Dekal Portfolio" />
      <meta
        property="og:image"
        content="https://phatho-folio.now.sh/images/cover.jpg"
      />
      <meta
        property="og:image:secure_url"
        content="https://phatho-folio.now.sh/images/cover.jpg"
      />
      <meta property="og:url" content="https://phatho-folio.now.sh/" />
      <meta property="og:locale" content="en_VN" />
      <meta property="og:site_name" content="Phat Portfolio" />
      <meta
        name="google-site-verification"
        content="ofwBFRuFL3aycSJjDcrhc8hWEPKuJ7LkNCLUrsB0Sj4"
      />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <script
        async=""
        src="https://www.googletagmanager.com/gtag/js?id=UA-102977389-1"
      ></script>
    </Head>
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
