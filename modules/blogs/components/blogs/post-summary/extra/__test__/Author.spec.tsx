import * as React from 'react'
import { shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import Author from '../Author'

describe('Blogs Extra Author', () => {
  it('should render without throwing an error', function() {
    const wrap = shallowWithTheme(
      <Author />
    )
    expect(wrap).toMatchSnapshot()
  })
})
