import * as React from 'react'
import { shallowWithTheme } from '~/utils/withThemeProviders'
import Nav from '~/views/components/Nav'

describe('Nav', () => {

  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<Nav />)
    expect(wrap).toMatchSnapshot()
  })

})