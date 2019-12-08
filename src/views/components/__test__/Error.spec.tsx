import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import Error from '~/views/components/Error'

describe('Error', () => {

  it('should render Error Component with 404', function () {
    const wrap = mountWithTheme(<Error statusCode={404} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render Error Component with 500', function () {
    const wrap = mountWithTheme(<Error statusCode={500} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render Error Component in general case', function () {
    const wrap = mountWithTheme(<Error />)
    expect(wrap).toMatchSnapshot()
  })
})