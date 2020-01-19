import * as React from 'react'
import { shallowWithTheme } from '~/views/core/utils/withThemeProviders'
import NavLogo from '~/views/blogs/components/navbar/NavLogo'

describe('Blog NavLogo', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<NavLogo />)
    expect(wrap).toMatchSnapshot()
  })
})
