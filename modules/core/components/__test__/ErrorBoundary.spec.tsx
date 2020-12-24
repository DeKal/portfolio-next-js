import * as React from 'react'
import { mount, shallow } from 'enzyme'
import ErrorBoundary from '~/modules/core/components/ErrorBoundary'

describe('ErrorBoundary', () => {
  it('should render children div', function() {
    const wrap = mount(
      <ErrorBoundary>
        <div>noError</div>
      </ErrorBoundary>
    )
    expect(wrap).toMatchSnapshot()
  })

  it('should return object with error and has error', function() {
    const state = ErrorBoundary.getDerivedStateFromError('Error')
    expect(state).toMatchSnapshot()
  })

  it('should render error with setState', function() {
    const wrap = shallow(
      <ErrorBoundary>
        <div>noError</div>
      </ErrorBoundary>
    )
    wrap.setState({
      hasError: true
    })

    expect(wrap).toMatchSnapshot()
  })
})
