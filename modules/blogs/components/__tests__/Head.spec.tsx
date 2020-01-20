import * as React from 'react'
import { mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import Head from '~/modules/blogs/components/Head'

describe('Head', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Head />)
    expect(wrap).toMatchSnapshot()
  })

})
