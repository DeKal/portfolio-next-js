import * as React from 'react'
import { shallowWithBaseTheme } from '~/modules/core/utils/withThemeProviders'
import SubInfo from '../SubInfo'
import theme from '~/modules/core/theme/styleguide/blogTheme'

describe('Post Info SubInfo', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithBaseTheme(<SubInfo />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
