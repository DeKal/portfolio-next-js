import * as React from 'react'
import { mountWithTheme } from '~/utils/withThemeProviders'
import Typist from '~/views/home/components/common/Typist'
import { act } from 'react-dom/test-utils'



describe('Typist', () => {
  it('should render without throwing an error', function() {
    jest.useFakeTimers()
    const wrap = mountWithTheme(
      <Typist>
        <div>Test Typist</div>
      </Typist>
    )

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(wrap).toMatchSnapshot()
  })

  it('should render Typist 1 without throwing an error', function() {
    jest.useFakeTimers()
    const wrap = mountWithTheme(
      <Typist>
        <div>Test Typist 1</div>
        <div>Test Typist 2</div>
      </Typist>
    )

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(wrap).toMatchSnapshot()
  })
})
