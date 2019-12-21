import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components/macro'
import { LocalizeProvider } from 'react-localize-redux'
import { IconContext } from 'react-icons/lib/'
import theme from '~/views/theme'
import LocalizedComponent from '~/views/localize/LocalizedComponent'
import Loading from '~/views/original-components/Loading'
import ErrorBoundary from '~/views/components/ErrorBoundary'

import 'bootstrap/dist/css/bootstrap.min.css'
//Import Global style
import '~/styles/globalStyle.sass'

export default class MyApp extends App {
  state = {
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: false })
  }

  render() {
    const { Component, pageProps } = this.props
    return this.state.loading ? (
      <Loading />
    ) : (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <ThemeProvider theme={theme}>
          <LocalizeProvider>
            <LocalizedComponent>
              <ErrorBoundary>
                <Component {...pageProps} />
              </ErrorBoundary>
            </LocalizedComponent>
          </LocalizeProvider>
        </ThemeProvider>
      </IconContext.Provider>
    )
  }
}
