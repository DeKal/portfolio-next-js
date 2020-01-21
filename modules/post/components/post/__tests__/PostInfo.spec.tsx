import * as React from 'react'
import { shallowWithBaseTheme } from '~/modules/core/utils/withThemeProviders'
import PostInfo from '~/modules/post/components/post/PostInfo'
import theme from '~/modules/core/theme/styleguide/blogTheme'

describe('PostInfo', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithBaseTheme(<PostInfo />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
