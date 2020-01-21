import * as React from 'react'
import { mount } from 'enzyme'
import GlobalStyleCss from '~/modules/post/theme/GlobalStyleCss'

describe('GlobalStyleCss', () => {
  it('should render blogTheme without throwing an error', function () {
    const wrap = mount(<GlobalStyleCss />)
    expect(wrap).toMatchSnapshot()
  })
})