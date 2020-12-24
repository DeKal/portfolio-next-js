import * as React from 'react'
import { mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import Certification from '~/modules/home/components/Certification'

describe('Certification', () => {
  it('should render without throwing an error', function() {
    const wrap = mountWithTheme(<Certification />)
    expect(wrap).toMatchSnapshot()
  })
})
