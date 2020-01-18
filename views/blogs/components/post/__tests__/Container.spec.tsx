import * as React from 'react'
import { shallowWithTheme } from '~/utils/withThemeProviders'
import Container from '~/views/blogs/components/post/Container'

describe('Blog Container', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<Container />)
    expect(wrap).toMatchSnapshot()
  })
})
