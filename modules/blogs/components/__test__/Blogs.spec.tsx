import * as React from 'react'
import { shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import Blogs from '../Blogs'

describe('Blogs', () => {

  it('should render without throwing an error', function () {
    const blogPosts = [
      {
        id: 1,
        header: 'Test header 1',
        slug: 'test-slug-1',
        brief: 'This is test brief 1',
        author: 'test author 1',
        date: '20/1/2019'
      },
      {
        id: 2,
        header: 'Test header 2',
        slug: 'test-slug-2',
        brief: 'This is test brief 2',
        author: 'test author 2',
        date: '20/1/2019'
      }
    ]
    const wrap = shallowWithTheme(<Blogs posts={blogPosts}/>)
    expect(wrap).toMatchSnapshot()
  })

  it('should render without empty posts', function () {
    const emptyPosts = []
    const wrap = shallowWithTheme(<Blogs posts={emptyPosts}/>)
    expect(wrap).toMatchSnapshot()
  })

})
