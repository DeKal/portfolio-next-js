import * as React from 'react'
import { shallow } from 'enzyme'
import ThemeProviderSelector from '~/views/theme/ThemeProviderSelector'
import * as helpers from '~/utils/helpers'

describe('Theme Provider Selector', () => {
  it('should render for normal day without throwing an error', function() {
    jest.spyOn(helpers, 'isChristmasDay').mockImplementation(() => false)
    jest.spyOn(helpers, 'isNewYearComing').mockImplementation(() => false)
    const wrap = shallow(<ThemeProviderSelector />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render for christmas day without throwing an error', function() {
    jest.spyOn(helpers, 'isChristmasDay').mockImplementation(() => true)
    jest.spyOn(helpers, 'isNewYearComing').mockImplementation(() => false)
    const wrap = shallow(<ThemeProviderSelector />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render for new year day without throwing an error', function() {
    jest.spyOn(helpers, 'isChristmasDay').mockImplementation(() => false)
    jest.spyOn(helpers, 'isNewYearComing').mockImplementation(() => true)
    const wrap = shallow(<ThemeProviderSelector />)
    expect(wrap).toMatchSnapshot()
  })
})
