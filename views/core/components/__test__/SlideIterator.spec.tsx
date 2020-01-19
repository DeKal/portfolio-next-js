import * as React from 'react'
import { mountWithTheme } from '~/views/core/utils/withThemeProviders'
import SlideIterator from '~/views/core/components/SlideIterator'

describe('Slide', () => {
  it('should render without throwing an error', function() {
    const wrap = mountWithTheme(
      <SlideIterator>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SlideIterator>
    )
    expect(wrap).toMatchSnapshot()
  })
})
