import * as React from 'react'
import { shallow } from 'enzyme'
import ThemeProviderSelector from '~/views/core/theme/ThemeProviderSelector'
import * as helpers from '~/views/core/utils/helpers'
import * as Router from 'next/router'

describe('Theme Provider Selector', () => {
  describe('Selector fo normal theme', () => {
    beforeEach(() => {
      const mockUseRouter = () => ({
        pathname: '/'
      })
      // @ts-ignore 
      jest.spyOn(Router, 'useRouter').mockImplementation(mockUseRouter)
    })

    it('should render for normal day without throwing an error', function () {
      jest.spyOn(helpers, 'isChristmasDay').mockImplementation(() => false)
      jest.spyOn(helpers, 'isNewYearComing').mockImplementation(() => false)
      jest.spyOn(helpers, 'isTet').mockImplementation(() => false)
      const wrap = shallow(<ThemeProviderSelector />)
      expect(wrap).toMatchSnapshot()
    })

    it('should render for christmas day without throwing an error', function () {
      jest.spyOn(helpers, 'isChristmasDay').mockImplementation(() => true)
      jest.spyOn(helpers, 'isNewYearComing').mockImplementation(() => false)
      const wrap = shallow(<ThemeProviderSelector />)
      expect(wrap).toMatchSnapshot()
    })

    it('should render for new year day without throwing an error', function () {
      jest.spyOn(helpers, 'isChristmasDay').mockImplementation(() => false)
      jest.spyOn(helpers, 'isNewYearComing').mockImplementation(() => true)
      const wrap = shallow(<ThemeProviderSelector />)
      expect(wrap).toMatchSnapshot()
    })

    it('should render for tet without throwing an error', function () {
      jest.spyOn(helpers, 'isChristmasDay').mockImplementation(() => false)
      jest.spyOn(helpers, 'isNewYearComing').mockImplementation(() => false)
      jest.spyOn(helpers, 'isTet').mockImplementation(() => true)
      const wrap = shallow(<ThemeProviderSelector />)
      expect(wrap).toMatchSnapshot()
    })
  })

  describe('Selector fo blog theme', () => {
    beforeEach(() => {
      const mockUseRouter = () => ({
        pathname: '/blogs'
      })
      // @ts-ignore 
      jest.spyOn(Router, 'useRouter').mockImplementation(mockUseRouter)
    })
    
    it('should render for blog the,e throwing an error', function () {
      const wrap = shallow(<ThemeProviderSelector />)
      expect(wrap).toMatchSnapshot()
    })
  })

})
