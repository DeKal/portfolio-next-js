import * as React from 'react'
import {  mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import Container from '../Container'

describe('Blogs Container', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Container />)
    expect(wrap).toMatchSnapshot()
  })

})
