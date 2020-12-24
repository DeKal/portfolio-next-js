import * as React from 'react'
import { mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import CardHeader from '~/modules/home/components/about/CardHeader'

describe('Card Header', () => {
  it('should render without throwing an error', function() {
    const wrap = mountWithTheme(<CardHeader />)
    expect(wrap).toMatchSnapshot()
  })
})
