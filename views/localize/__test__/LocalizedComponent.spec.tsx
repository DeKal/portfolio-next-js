import * as React from 'react'
import { mount } from 'enzyme'
import { Translate } from 'react-localize-redux'
import LocalizedComponent from '~/views/localize/LocalizedComponent'

describe('LocalizedComponent', () => {
  it('should render without throwing an error', function() {
    const wrap = mount(
      <LocalizedComponent>
        <Translate id="Home" />
      </LocalizedComponent>
    )
    expect(wrap).toMatchSnapshot()
  })
})
