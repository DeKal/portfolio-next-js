import * as React from 'react'
import { mountWithTheme } from '~/views/core/utils/withThemeProviders'
import WhyMe from '~/views/home/components/WhyMe'

describe('WhyMe', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<WhyMe />)
    expect(wrap).toMatchSnapshot()
  })

})