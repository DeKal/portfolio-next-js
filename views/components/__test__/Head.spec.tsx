import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import Head from '~/views/components/Head'

describe('Head', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Head />)
    expect(wrap).toMatchSnapshot()
  })

})