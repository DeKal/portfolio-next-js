import * as React from 'react'
import { shallowWithBaseTheme } from '~/views/core/utils/withThemeProviders'
import SubInfo from '../SubInfo'
import theme from '~/theme/blogTheme'

describe('Blog Post Info SubInfo', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithBaseTheme(<SubInfo />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
