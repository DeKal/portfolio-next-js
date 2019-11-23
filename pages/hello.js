import * as React from 'react'
import Head from 'next/head'
import Nav from '~/views/components/nav'

const Hello = () => (
  <div>
    <Head>
      <title>Hello</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Nav />
    <b>Hello Next.js</b>
  </div>
)

export default Hello
