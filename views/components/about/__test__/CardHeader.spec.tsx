import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import CardHeader from '~/views/components/about/CardHeader'

describe('Card Header', () => {
  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<CardHeader />)
    expect(wrap).toMatchSnapshot()
  })
})