import * as React from 'react'
import { mountWithTheme } from '~/views/core/utils/withThemeProviders'
import Project from '~/views/home/components/Project'

describe('Project', () => {

  it('should render without throwing an error', function () {
    const wrap = mountWithTheme(<Project />)
    expect(wrap).toMatchSnapshot()
  })

})