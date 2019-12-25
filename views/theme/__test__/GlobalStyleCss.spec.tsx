import * as React from 'react'
import { mount } from 'enzyme'
import GlobalStyleCss from '~/views/theme/GlobalStyleCss'
import defaultTheme from '~/theme/theme'
import xmasTheme from '~/theme/christMasTheme'
import newyearTheme from '~/theme/newYearTheme'

describe('GlobalStyleCss', () => {

  it('should render defaultTheme without throwing an error', function () {
    const wrap = mount(<GlobalStyleCss theme={defaultTheme} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render xmasTheme without throwing an error', function () {
    const wrap = mount(<GlobalStyleCss theme={xmasTheme} />)
    expect(wrap).toMatchSnapshot()
  })

  it('should render newyearTheme without throwing an error', function () {
    const wrap = mount(<GlobalStyleCss theme={newyearTheme} />)
    expect(wrap).toMatchSnapshot()
  })

})