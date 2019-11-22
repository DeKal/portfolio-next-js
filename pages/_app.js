import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import theme from '~/views/theme'

// Import Global CSS
import '~/style/globalStyle.scss'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
