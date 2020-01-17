import * as React from 'react'
import { shallowWithTheme } from '~/utils/withThemeProviders'
import NavLang from '~/views/home/components/nav/NavLang'

describe('Nav Lang', () => {

  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<NavLang />)
    expect(wrap).toMatchSnapshot()
  })

})