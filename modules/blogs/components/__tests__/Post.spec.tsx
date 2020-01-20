import * as React from 'react'
import { shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import Post from '~/modules/blogs/components/Post'

const data = {
  header: 'Search: The Whole Story',
  content: 'Query understanding and relevance are key aspects of search, but they don’t tell the whole story.',
  authorName: 'Daniel Tunkelang',
  date: 'Mar 25, 2019',
  minRead: '6'
}

describe('Blog Post', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<Post data={data} />)
    expect(wrap).toMatchSnapshot()
  })
})
