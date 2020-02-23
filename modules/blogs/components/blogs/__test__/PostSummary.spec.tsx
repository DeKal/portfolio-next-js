import * as React from 'react'
import { shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import PostSummary from '../PostSummary'

describe('Blogs PostSummary', () => {
  it('should render without throwing an error', function () {
    const post = {
      header: 'post header',
      author: 'post author',
      date: '20/11/2020',
      brief: 'post brief',
      slug: 'post'
    }

    const wrap = shallowWithTheme(<PostSummary {...post} />)
    expect(wrap).toMatchSnapshot()
  })
})
