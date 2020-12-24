import * as React from 'react'
import { shallowWithBaseTheme } from '~/modules/core/utils/withThemeProviders'
import Author from '../Author'
import theme from '~/modules/core/theme/styleguide/blogTheme'

describe('Post Info Author', () => {
  it('should render without throwing an error', function() {
    const wrap = shallowWithBaseTheme(<Author />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
