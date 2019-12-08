import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import Contact from '~/views/components/Contact'

describe('Footer', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Contact />)
    expect(wrap).toMatchSnapshot()
  })

})