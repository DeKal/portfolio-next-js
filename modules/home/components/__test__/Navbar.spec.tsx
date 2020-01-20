import * as React from 'react'
import { mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import Navbar from '~/modules/home/components/Navbar'

describe('Navbar', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Navbar />)
    expect(wrap).toMatchSnapshot()
  })

})