import * as React from 'react'
import NextHead from 'next/head'

const Head = () => (
  <NextHead>
    <title>Portfolio</title>
    <link rel="icon" href="/favicon.ico" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="description" content="Dekal 's Portfolio" />
    <meta
      name="keywords"
      content="portfolio, dekal, software engineer, freelancer, cv, work"
    />
    <meta property="og:type" content="website" />
    <meta property="og:title" content=" | Portfolio" />
    <meta property="og:description" content="Dekal 's Portfolio" />
    <meta property="og:image" content="/static/images/card.jpg" />
    <meta property="og:url" content="https://phathofolio.imfast.io/" />
  </NextHead>
)

export default Head
