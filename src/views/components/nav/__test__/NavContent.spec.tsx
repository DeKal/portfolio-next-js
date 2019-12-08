import * as React from 'react'
import { mountWithTheme, shallowWithTheme } from '~/utils/withThemeProviders'
import NavContent from '~/views/components/nav/NavContent'

describe('Nav Content', () => {
  it('should render without throwing an error', function() {
    const wrap = shallowWithTheme(<NavContent />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render with isShowNavContent enable', function() {
    const wrap = mountWithTheme(<NavContent isShowNavContent />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render with isShowNavContent disable', function() {
    const wrap = mountWithTheme(<NavContent isShowNavContent={false} />)
    expect(wrap).toMatchSnapshot()
  })
})
