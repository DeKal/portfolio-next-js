import * as React from 'react'
import { shallowWithTheme } from '~/utils/withThemeProviders'
import Navbar from '~/views/blogs/components/Navbar'

describe('Blog Navbar', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<Navbar />)
    expect(wrap).toMatchSnapshot()
  })
})
