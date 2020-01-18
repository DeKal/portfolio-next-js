import * as React from 'react'
import { shallowWithTheme } from '~/utils/withThemeProviders'
import Search from '~/views/blogs/components/navbar/Search'

describe('Blog NavLogo', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<Search />)
    expect(wrap).toMatchSnapshot()
  })
})
