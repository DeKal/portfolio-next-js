import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import Footer from '~/views/components/Footer'

describe('Navbar', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Footer />)
    expect(wrap).toMatchSnapshot()
  })

})