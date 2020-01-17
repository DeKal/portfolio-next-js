import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import About from '~/views/home/components/About'

describe('About', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<About />)
    expect(wrap).toMatchSnapshot()
  })

})