import * as React from 'react'
import { mountWithTheme, shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import NavHeader from '~/modules/home/components/nav/NavHeader'

describe('Nav Header', () => {
  it('should render when show NavContent', function() {
    const wrap = mountWithTheme(<NavHeader />)

    expect(mountWithTheme(<NavHeader isShowNavContent />)).toMatchSnapshot()
  })

  it('should render when not show NavContent', function() {
    const wrap = mountWithTheme(<NavHeader />)

    expect(mountWithTheme(<NavHeader />)).toMatchSnapshot()
  })

  it('should switchNav from Off to On', function() {
    const switchNav = jest.fn()
    const wrap = shallowWithTheme(
      <NavHeader switchNav={switchNav} />
    )
    expect(wrap).toMatchSnapshot()

    wrap.find('[data-test-id="switch-nav-content"]').simulate('click')
    
    expect(switchNav.mock.calls.length).toEqual(1)
    expect(switchNav).toHaveBeenCalledWith(true);
  })

  it('should switchNav from On to Off', function() {
    const switchNav = jest.fn()
    const wrap = shallowWithTheme(
      <NavHeader isShowNavContent switchNav={switchNav} />
    )
    expect(wrap).toMatchSnapshot()

    wrap.find('[data-test-id="switch-nav-content"]').simulate('click')
    
    expect(switchNav.mock.calls.length).toEqual(1)
    expect(switchNav).toHaveBeenCalledWith(false);
    
  })
})
