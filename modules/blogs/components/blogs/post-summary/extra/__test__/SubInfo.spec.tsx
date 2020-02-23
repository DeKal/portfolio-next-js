import * as React from 'react'
import { shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import SubInfo from '../SubInfo'

describe('Blogs Extra SubInfo', () => {
  it('should render without throwing an error', function() {
    const wrap = shallowWithTheme(
      <SubInfo />
    )
    expect(wrap).toMatchSnapshot()
  })
})
