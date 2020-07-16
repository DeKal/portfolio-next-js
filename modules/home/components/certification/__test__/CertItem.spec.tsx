import * as React from 'react'
import { shallowWithTheme } from '~/modules/core/utils/withThemeProviders'
import CertItem from '~/modules/home/components/certification/CertItem'

describe('CertItem', () => {
  it('should setSelected Item when clicking', function () {
    const setSelectedItemMock = jest.fn()
    const wrap = shallowWithTheme(
      <CertItem
        idNum={0}
        setSelectedItem={setSelectedItemMock}
      />
    )
    wrap.find('[data-test-id="cert-item-0"]').simulate('click')

    expect(setSelectedItemMock.mock.calls.length).toEqual(1)
    expect(setSelectedItemMock).toHaveBeenCalledWith(0)
  })
})
