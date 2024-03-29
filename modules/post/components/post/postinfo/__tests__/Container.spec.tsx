import * as React from 'react'
import { shallowWithBaseTheme } from '~/modules/core/utils/withThemeProviders'
import Container from '../Container'
import theme from '~/modules/core/theme/styleguide/blogTheme'

describe('Post Info Container', () => {
  it('should render without throwing an error', function() {
    const wrap = shallowWithBaseTheme(<Container />, theme)
    expect(wrap).toMatchSnapshot()
  })
})
