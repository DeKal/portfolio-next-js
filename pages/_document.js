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
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta property="og:title" content="PhatHo Portfolio and Website" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Fullstack Software Engineer. 5+ years of algorithm background since high school. 5+ years of experience specializing in frontend/backend development"
          />
          <meta
            property="og:image"
            content="https://phatho-dev.com/images/cover-img.png"
          />
          <meta
            property="og:image:secure_url"
            content="https://phatho-dev.com/images/cover-img.png"
          />
          <meta property="og:url" content="https://phatho-dev.com" />
          <meta
            property="og:site_name"
            content="PhatHo Portfolio and Website"
          />
          <meta
            property="og:image:alt"
            content="PhatHo Portfolio and Website"
          />
          <meta
            name="google-site-verification"
            content="ofwBFRuFL3aycSJjDcrhc8hWEPKuJ7LkNCLUrsB0Sj4"
          />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta name="theme-color" content="#ffffff" />
          <title>PhatHo Portfolio and Website</title>
          <meta
            name="description"
            content="Fullstack Software Engineer. 5+ years of algorithm background since high school. 5+ years of experience specializing in frontend/backend development"
          />
          <meta
            name="keywords"
            content="portfolio, website, cv, experiences, jobs"
          />
          <meta name="author" content="Phat Ho" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/icons/Icon-64.png" />
          <link
            rel="preload"
            href="fonts/ip/font/ip.woff"
            as="font"
            crossOrigin=""
          />
          <link
            href="/icons/Icon-32.png"
            rel="icon"
            type="image/png"
            sizes="32x32"
          />
          <link
            href="/icons/Icon-64.png"
            rel="icon"
            type="image/png"
            sizes="64x64"
          />

          <link rel="canonical" href="https://phatho-dev.com" />
          <link rel="manifest" href="/manifest.json" />

          <script
            async
            defer
            src="https://www.googletagmanager.com/gtag/js?id=UA-172952138-1"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-172952138-1');
              `
            }}
          />
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
