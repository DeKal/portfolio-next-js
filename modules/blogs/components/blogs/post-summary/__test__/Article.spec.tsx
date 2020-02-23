import * as React from 'react'
import { shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import Article from '../Article'

describe('Blogs Article', () => {
  it('should render without throwing an error', function() {
    const wrap = shallowWithTheme(
      <Article header="test header" brief="test brief" slug="test-slug" />
    )
    expect(wrap).toMatchSnapshot()
  })

  it('should change href when clicking the container', function() {
    const wrap = shallowWithTheme(
      <Article header="test header" brief="test brief" slug="test-slug" />
    )
    wrap.find('[data-test-id="article-container"]').simulate('click')
  })
})
