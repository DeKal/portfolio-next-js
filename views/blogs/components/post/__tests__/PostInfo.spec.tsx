import * as React from 'react'
import { shallowWithTheme } from '~/utils/withThemeProviders'
import PostInfo from '~/views/blogs/components/post/PostInfo'

describe('Blog PostInfo', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<PostInfo />)
    expect(wrap).toMatchSnapshot()
  })
})
