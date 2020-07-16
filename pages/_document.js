import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
/*
 * Some notes:
 * 1) _document.js will load on server side -> all this meta tag will be fetched by Scraper of Facebook, Linkedin, ...
 * 2) og:image need to be change name in order for FB to reload the new preview image
 * 3) sharing on staging env wont work, because og:url is set to main page
 */
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://phatho-folio.now.sh/" />
          <meta property="og:title" content="DeKal | Portfolio" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Dekal's Portfolio and Blog"
          />
          <meta
            property="og:image"
            content="https://phatho-folio.now.sh/images/cover-img.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://phatho-folio.now.sh/images/cover-img.png"
          />
          <meta property="og:url" content="https://phatho-folio.now.sh/" />
          <meta property="og:site_name" content="DeKal Portfolio" />
          <meta property="og:image:alt" content="DeKal Portfolio" />
          <meta
            name="google-site-verification"
            content="ofwBFRuFL3aycSJjDcrhc8hWEPKuJ7LkNCLUrsB0Sj4"
          />
          <meta name="robots" content="index,follow" />

          <meta name="googlebot" content="index,follow" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
