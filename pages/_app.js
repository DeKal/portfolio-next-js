import App from 'next/app'
import React from 'react'
import { LocalizeProvider } from 'react-localize-redux'
import { IconContext } from 'react-icons/lib/'
import LocalizedComponent from '~/views/core/localize/LocalizedComponent'
import Loading from '~/views/core/components/Loading'
import ErrorBoundary from '~/views/core/components/ErrorBoundary'
import ThemeProviderSelector from '~/views/core/theme/ThemeProviderSelector'
import 'bootstrap/dist/css/bootstrap.min.css'
//Import Global style
import '~/public/styles/globalStyle.sass'

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
        <ThemeProviderSelector>
          <LocalizeProvider>
            <LocalizedComponent>
              <ErrorBoundary>
                <Component {...pageProps} />
              </ErrorBoundary>
            </LocalizedComponent>
          </LocalizeProvider>
        </ThemeProviderSelector>
      </IconContext.Provider>
    )
  }
}
