import * as React from 'react'
import { shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import Navbar from '~/modules/core/components/PostNavbar'

describe('Post Navbar', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<Navbar />)
    expect(wrap).toMatchSnapshot()
  })
})
