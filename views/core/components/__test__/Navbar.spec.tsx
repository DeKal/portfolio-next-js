import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import Navbar from '~/views/core/components/Navbar'

describe('Navbar', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Navbar />)
    expect(wrap).toMatchSnapshot()
  })

})