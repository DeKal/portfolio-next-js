import * as React from 'react'
import { mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import NavLink from '~/modules/home/components/nav/NavLink'
import { EN, VN } from '~/modules/home/consts/langs'

import useWindowDimensions from '~/modules/core/utils/useWindowDimensions'
jest.mock('~/modules/core/utils/useWindowDimensions')

describe('Nav Link', () => {
  describe('Big Device >= 768px', () => {
    beforeEach(() => {
      useWindowDimensions.mockReturnValue({
        width: 768
      })
    })

    it('should render with English selected', function() {
      const wrap = mountWithTheme(<NavLink lang={EN} selectedLang={EN} />)
      expect(wrap).toMatchSnapshot()
    })

    it('should render with Vietnamese selected', function() {
      const wrap = mountWithTheme(<NavLink lang={VN} selectedLang={VN} />)
      expect(wrap).toMatchSnapshot()
    })

    it('should change Language when clicking', function() {
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

    it('should render with English selected', function() {
      const wrap = mountWithTheme(<NavLink lang={EN} selectedLang={EN} />)
      expect(wrap).toMatchSnapshot()
    })

    it('should render with Vietnamese selected', function() {
      const wrap = mountWithTheme(<NavLink lang={VN} selectedLang={VN} />)
      expect(wrap).toMatchSnapshot()
    })
  })
})
