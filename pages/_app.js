import App from 'next/app'
import React from 'react'
import { LocalizeProvider } from 'react-localize-redux'
import { IconContext } from 'react-icons/lib/'
import LocalizedComponent from '~/modules/core/localize/LocalizedComponent'
import Loading from '~/modules/core/components/Loading'
import ErrorBoundary from '~/modules/core/components/ErrorBoundary'
import ThemeProviderSelector from '~/modules/core/theme/ThemeProviderSelector'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-vertical-timeline-component/style.min.css'
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
