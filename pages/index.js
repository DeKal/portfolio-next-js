import React from 'react'
import Head from 'next/head'
import Nav from '~/views/components/nav'
import css from '~/style/index.scss'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav />

    <div className={css.hero}>
      <h1 className={css.title}>Welcome to Next.js!</h1>
      <p className={css.description}>
        To get started, edit <code>pages/index.js</code> and save to reload.
      </p>

      <div className={css.row}>
        <a href="https://nextjs.org/docs" className={css.card}>
          <h3>Documentation &rarr;</h3>
          <p>Learn more about Next.js in the documentation.</p>
        </a>
        <a href="https://nextjs.org/learn" className={css.card}>
          <h3>Next.js Learn &rarr;</h3>
          <p>Learn about Next.js by following an interactive tutorial!</p>
        </a>
        <a
          href="https://github.com/zeit/next.js/tree/master/examples"
          className={css.card}
        >
          <h3>Examples &rarr;</h3>
          <p>Find other example boilerplates on the Next.js GitHub.</p>
        </a>
      </div>
    </div>
  </div>
)

export default Home
