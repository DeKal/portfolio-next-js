import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import Home from '~/views/components/Home'
import {getTexts} from '~/views/components/Home'
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