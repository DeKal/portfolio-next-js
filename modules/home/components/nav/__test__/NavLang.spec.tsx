import * as React from 'react'
import { shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import NavLang from '~/modules/home/components/nav/NavLang'

describe('Nav Lang', () => {
  it('should render without throwing an error', function() {
    const wrap = shallowWithTheme(<NavLang />)
    expect(wrap).toMatchSnapshot()
  })
})
