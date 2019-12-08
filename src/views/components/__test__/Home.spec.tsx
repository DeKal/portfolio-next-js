import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import Home from '~/views/components/Home'

describe('Home', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Home />)
    expect(wrap).toMatchSnapshot()
  })

})