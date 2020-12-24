import * as React from 'react'
import { mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import SideProjects from '~/modules/home/components/SideProjects'

describe('SideProjects', () => {
  it('should render without throwing an error', function() {
    const wrap = mountWithTheme(<SideProjects />)
    expect(wrap).toMatchSnapshot()
  })
})
