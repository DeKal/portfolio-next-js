import * as React from 'react'
import { shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import Extra from '../Extra'

describe('Blogs Extra', () => {
  it('should render without throwing an error', function() {
    const wrap = shallowWithTheme(
      <Extra
        author="test author"
        avatar="avatar"
        date="20/12/2020"
        minRead="6"
      />
    )
    expect(wrap).toMatchSnapshot()
  })
})
