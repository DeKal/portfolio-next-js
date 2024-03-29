import * as React from 'react'
import {
  mountWithTheme,
  shallowWithTheme
} from '~/modules/core/utils/withThemeProviders'
import NavContent from '~/modules/home/components/nav/NavContent'
import * as helpers from '~/modules/core/utils/helpers'
import { ABOUT } from '~/modules/home/consts/pages'

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

  it('test hashChange when clicking to nav content', function() {
    jest.spyOn(helpers, 'getSelectedSection').mockImplementation(() => ABOUT)
    jest.spyOn(helpers, 'initHashLocation').mockImplementation(() => {})
    jest.spyOn(helpers, 'isSafari').mockImplementation(() => true)
    jest.spyOn(helpers, 'setJqueryScrollEvent').mockImplementation(() => {})
    const map = {
      hashchange: () => {}
    }
    window.addEventListener = jest.fn().mockImplementation((event, cb) => {
      map[event] = cb
    })

    const wrap = mountWithTheme(<NavContent isShowNavContent={false} />)
    map.hashchange()
    wrap.unmount()
  })
})
