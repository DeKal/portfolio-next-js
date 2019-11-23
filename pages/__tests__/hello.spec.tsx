import * as React from 'react'
import { mountWithTheme } from '../../utils/withThemeProviders'
import Hello from '../hello'

describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error', function () {
      const wrap = mountWithTheme(<Hello />)
      expect(wrap.find('b').text()).toBe('Hello Next.js')
    })
  })
})
