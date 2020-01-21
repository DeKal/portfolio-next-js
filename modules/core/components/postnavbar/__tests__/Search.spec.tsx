import * as React from 'react'
import { shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import Search from '~/modules/core/components/postnavbar/Search'

describe('NavLogo', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<Search />)
    expect(wrap).toMatchSnapshot()
  })
})
