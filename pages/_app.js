import App from 'next/app'
import React from 'react'
import { LocalizeProvider } from 'react-localize-redux'
import { IconContext } from 'react-icons/lib/'
import LocalizedComponent from '~/views/localize/LocalizedComponent'
import Loading from '~/views/original-components/Loading'
import ErrorBoundary from '~/views/components/ErrorBoundary'
import ThemeProviderSelector from '~/views/theme/ThemeProviderSelector'
import MetaHead from '~/views/components/Head'
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
        <ThemeProviderSelector>
          <LocalizeProvider>
            <LocalizedComponent>
              <ErrorBoundary>
                <MetaHead />
                <Component {...pageProps} />
              </ErrorBoundary>
            </LocalizedComponent>
          </LocalizeProvider>
        </ThemeProviderSelector>
      </IconContext.Provider>
    )
  }
}
