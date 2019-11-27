import * as React from 'react'
import { shallow } from 'enzyme'
import Loading from '~/views/original-components/Loading'

describe('Loading', () => {

  it('should render without throwing an error', function () {
    const wrap = shallow(<Loading />)
    expect(wrap).toMatchSnapshot()
  })

})