import * as React from 'react'
import { mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import Home from '~/modules/home/components/Home'
import {getTexts} from '~/modules/home/components/Home'
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