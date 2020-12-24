import * as React from 'react'
import { mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import About from '~/modules/home/components/About'

describe('About', () => {
  it('should render without throwing an error', function() {
    const wrap = mountWithTheme(<About />)
    expect(wrap).toMatchSnapshot()
  })
})
