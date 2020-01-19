import * as React from 'react'
import { mountWithTheme } from '~/views/core/utils/withThemeProviders'
import Error from '~/views/core/components/Error'

describe('Error', () => {
  it('should render Error Component with 404', function() {
    const wrap = mountWithTheme(<Error statusCode={404} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render Error Component with 500', function() {
    const wrap = mountWithTheme(<Error statusCode={500} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render Error Component in undefined case', function() {
    const wrap = mountWithTheme(<Error />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render Error Component in general case', function() {
    const wrap = mountWithTheme(<Error statusCode={999} />)
    expect(wrap).toMatchSnapshot()
  })
})
