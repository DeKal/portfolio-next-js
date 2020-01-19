import * as React from 'react'
import { shallowWithBaseTheme } from '~/utils/withThemeProviders'
import Author from '../Author'
import theme from '~/theme/blogTheme'

describe('Blog Post Info Author', () => {
  it('should render without throwing an error', function () {
    const wrap = shallowWithBaseTheme(<Author />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
