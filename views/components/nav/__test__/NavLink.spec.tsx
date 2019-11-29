import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import NavLink from '~/views/components/nav/NavLink'
import { EN, VN } from '~/consts/langs'

import useWindowDimensions from '~/utils/useWindowDimensions'
jest.mock('~/utils/useWindowDimensions')

describe('Nav Link', () => {
  describe('Big Device >= 600px', () => {
    beforeEach(() => {
      useWindowDimensions.mockReturnValue({
        width: 800
      })
    })
  
    it('should render with English selected', function () {
      const wrap = mountWithTheme(<NavLink lang={EN} selectedLang={EN} />)
      expect(wrap).toMatchSnapshot()
    })
  
    it('should render with Vietnamese selected', function () {
      const wrap = mountWithTheme(<NavLink lang={VN} selectedLang={VN} />)
      expect(wrap).toMatchSnapshot()
    })
  
    it('should change Language when clicking', function () {
      const setSelectedLang = jest.fn()
      const setActiveLanguage = jest.fn()
      const wrap = mountWithTheme(
        <NavLink
          lang={VN}
          selectedLang={EN}
          setSelectedLang={setSelectedLang}
          setActiveLanguage={setActiveLanguage}
        />
      )
      wrap.simulate('click')
      expect(wrap).toMatchSnapshot()
  
      expect(setSelectedLang.mock.calls.length).toEqual(1)
      expect(setSelectedLang).toHaveBeenCalledWith(VN)
  
      expect(setActiveLanguage.mock.calls.length).toEqual(1)
      expect(setActiveLanguage).toHaveBeenCalledWith(VN)
    })
  })
  
  describe('Small Device < 600px', () => {
    beforeEach(() => {
      useWindowDimensions.mockReturnValue({
        width: 500
      })
    })
  
    it('should render with English selected', function () {
      const wrap = mountWithTheme(<NavLink lang={EN} selectedLang={EN} />)
      expect(wrap).toMatchSnapshot()
    })
  
    it('should render with Vietnamese selected', function () {
      const wrap = mountWithTheme(<NavLink lang={VN} selectedLang={VN} />)
      expect(wrap).toMatchSnapshot()
    })
  })

})
