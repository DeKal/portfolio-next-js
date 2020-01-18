import * as React from 'react'
import { shallowWithTheme } from '~/utils/withThemeProviders'
import Post from '~/views/blogs/components/Post'

describe('Blog Post', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<Post />)
    expect(wrap).toMatchSnapshot()
  })
})
