import * as React from 'react'
import { shallowWithTheme, mountWithTheme } from '~/utils/withThemeProviders'
import NavItem from '~/views/core/components/nav/NavItem'

const page = {
  name: "Home",
  url: `/#Home`,
  cmpName: "Home"
}
describe('Nav Item', () => {
  it('should render Selected NavItem', function() {
    const setSelectedPage = jest.fn()

    const tree = shallowWithTheme(
      <NavItem page={page} isSelected setSelectedPage={setSelectedPage} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('should render Normal NavItem', function() {
    const setSelectedPage = jest.fn()

    const tree = shallowWithTheme(
      <NavItem page={page} setSelectedPage={setSelectedPage} />
    )
    expect(tree).toMatchSnapshot()
  })

  it('should set selected page when clicking NavItem', function() {
    const setSelectedPage = jest.fn()

    const tree = mountWithTheme(
      <NavItem page={page} setSelectedPage={setSelectedPage} />
    )
    tree.find('a[data-test-id="nav-link"]').simulate('click')
    expect(setSelectedPage.mock.calls.length).toEqual(1)
    expect(setSelectedPage).toHaveBeenCalledWith('Home');
  })
})
