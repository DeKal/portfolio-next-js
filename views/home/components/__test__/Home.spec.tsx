import * as React from 'react'
import { mountWithTheme } from '~/views/core/utils/withThemeProviders'
import Home from '~/views/home/components/Home'
import {getTexts} from '~/views/home/components/Home'
describe('Home', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Home />)
    expect(wrap).toMatchSnapshot()
  })

  describe('getTexts', () => {
    it('should render with width < 460px', function () {
      expect(getTexts(400)).toMatchSnapshot()
    })

    it('should render with width > 460px', function () {
      expect(getTexts(800)).toMatchSnapshot()
    })
  })
})