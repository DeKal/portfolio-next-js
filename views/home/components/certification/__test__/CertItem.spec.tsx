import * as React from 'react'
import { shallowWithTheme } from '~/views/core/utils/withThemeProviders'
import CertItem from '~/views/home/components/certification/CertItem'

describe('CertItem', () => {
  it('should setSelected Item when clicking', function() {
    const setSelectedItemMock = jest.fn()
    const wrap = shallowWithTheme(
      <CertItem
        id={0}
        setSelectedItem={setSelectedItemMock}
      />
    )
    wrap.find('[data-test-id="cert-item"]').simulate('click')

    expect(setSelectedItemMock.mock.calls.length).toEqual(1)
    expect(setSelectedItemMock).toHaveBeenCalledWith(0)
  })
})
