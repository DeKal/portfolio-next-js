import * as React from 'react'
import { shallowWithBaseTheme } from '~/modules/core/utils/withThemeProviders'
import Container from '~/modules/blogs/components/post/Container'
import theme from '~/modules/core/theme/styleguide/blogTheme'

describe('Blog Container', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithBaseTheme(<Container />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
