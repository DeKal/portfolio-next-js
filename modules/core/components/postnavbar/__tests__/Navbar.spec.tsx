import * as React from 'react'
import { shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import NavLogo from '~/modules/core/components/postnavbar/NavLogo'

describe('NavLogo', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<NavLogo />)
    expect(wrap).toMatchSnapshot()
  })
})
