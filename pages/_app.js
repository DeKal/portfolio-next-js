import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { IconContext } from 'react-icons/lib/'

import theme from '~/views/theme'

//Import Global style
import '~/styles/globalStyle.sass'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </IconContext.Provider>
    )
  }
}
