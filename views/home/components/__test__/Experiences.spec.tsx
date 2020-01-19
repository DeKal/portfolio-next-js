import * as React from 'react'
import { mountWithTheme } from '~/views/core/utils/withThemeProviders'
import Experiences from '~/views/home/components/Experiences'

describe('Experiences', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Experiences />)
    expect(wrap).toMatchSnapshot()
  })

})