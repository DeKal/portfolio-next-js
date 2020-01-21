import * as React from 'react'
import { mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import Head from '../Head'

describe('Blogs Head', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Head />)
    expect(wrap).toMatchSnapshot()
  })

})
