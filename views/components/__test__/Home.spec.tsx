import * as React from 'react'
import { shallowWithTheme } from '~/utils/withThemeProviders'
import Home from '~/views/components/Home'

describe('Home', () => {

  it('should render without throwing an error', function () {
    const wrap = shallowWithTheme(<Home />)
    expect(wrap).toMatchSnapshot()
  })

})