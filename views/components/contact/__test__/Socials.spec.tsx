import * as React from 'react'
import { shallowWithTheme } from '~/utils/withThemeProviders'
import Socials from '~/views/components/contact/Socials'

describe('Social', () => {

  it('should change url when clicking to fb icon', function () {
    const wrap = shallowWithTheme(<Socials />)
    wrap.find('[data-test-id="socials-fb-link"]').simulate('click')
  })

  it('should change url when clicking to linkedin icon', function () {
    const wrap = shallowWithTheme(<Socials />)
    wrap.find('[data-test-id="socials-linkedin-link"]').simulate('click')
  })

})