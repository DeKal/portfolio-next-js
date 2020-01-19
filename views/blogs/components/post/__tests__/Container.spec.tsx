import * as React from 'react'
import { shallowWithBaseTheme } from '~/views/core/utils/withThemeProviders'
import Container from '~/views/blogs/components/post/Container'
import theme from '~/theme/blogTheme'

describe('Blog Container', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithBaseTheme(<Container />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
