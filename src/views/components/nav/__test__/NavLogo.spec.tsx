import * as React from 'react'
import { mountWithTheme, shallowWithTheme } from '~/utils/withThemeProviders'
import NavLogo from '~/views/components/nav/NavLogo'

describe('Nav Logo', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<NavLogo />)
    expect(wrap.find('span').text()).toBe('JD')

    expect(shallowWithTheme(<NavLogo />)).toMatchSnapshot()
  })

})