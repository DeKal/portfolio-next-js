import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import Certification from '~/views/components/Certification'

describe('Certification', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Certification />)
    expect(wrap).toMatchSnapshot()
  })

})
