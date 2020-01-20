import * as React from 'react'
import { mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import CardInfo from '~/modules/home/components/about/CardInfo'

describe('Card Info', () => {
  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<CardInfo />)
    expect(wrap).toMatchSnapshot()
  })
})