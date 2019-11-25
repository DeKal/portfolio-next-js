import * as React from 'react'
import { shallowWithTheme } from '~/utils/withThemeProviders'
import NavLink from '~/views/components/nav/NavLink'
import { EN, VN } from '~/consts/langs'
describe('Nav Link', () => {
  it('should render with English selected', function() {
    const wrap = shallowWithTheme(<NavLink lang={EN} selectedLang={EN} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render with Vietnamese selected', function() {
    const wrap = shallowWithTheme(<NavLink lang={VN} selectedLang={VN} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should change Language when clicking', function() {
    const setSelectedLang = jest.fn()
    const wrap = shallowWithTheme(
      <NavLink lang={VN} selectedLang={EN} setSelectedLang={setSelectedLang} />
    )
    wrap.simulate('click')
    expect(wrap).toMatchSnapshot()
    expect(setSelectedLang.mock.calls.length).toEqual(1)
    expect(setSelectedLang).toHaveBeenCalledWith(VN);
  })
})
