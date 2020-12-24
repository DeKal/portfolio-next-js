import * as React from 'react'
import { mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import Contact from '~/modules/home/components/Contact'

describe('Footer', () => {
  it('should render without throwing an error', function() {
    const wrap = mountWithTheme(<Contact />)
    expect(wrap).toMatchSnapshot()
  })
})
