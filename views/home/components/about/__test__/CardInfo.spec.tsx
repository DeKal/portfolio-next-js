import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import CardInfo from '~/views/home/components/about/CardInfo'

describe('Card Info', () => {
  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<CardInfo />)
    expect(wrap).toMatchSnapshot()
  })
})