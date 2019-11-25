import * as React from 'react'
import { mountWithTheme, shallowWithTheme } from '~/utils/withThemeProviders'
import NavHeader from '~/views/components/nav/NavHeader'

describe('Nav Header', () => {
  it('should render without throwing an error', function() {
    const wrap = mountWithTheme(<NavHeader />)

    expect(shallowWithTheme(<NavHeader />)).toMatchSnapshot()
  })

  it('should switchNav from Off to On', function() {
    const switchNav = jest.fn()
    const wrap = shallowWithTheme(
      <NavHeader isShowNavContent={false} switchNav={switchNav} />
    )
    expect(shallowWithTheme(<NavHeader />)).toMatchSnapshot()

    wrap.find('[data-test-id="switch-nav-content"]').simulate('click')
    
    expect(switchNav.mock.calls.length).toEqual(1)
    expect(switchNav).toHaveBeenCalledWith(true);
  })

  it('should switchNav from On to Off', function() {
    const switchNav = jest.fn()
    const wrap = shallowWithTheme(
      <NavHeader isShowNavContent switchNav={switchNav} />
    )
    expect(shallowWithTheme(<NavHeader />)).toMatchSnapshot()

    wrap.find('[data-test-id="switch-nav-content"]').simulate('click')
    
    expect(switchNav.mock.calls.length).toEqual(1)
    expect(switchNav).toHaveBeenCalledWith(false);
    
  })
})
