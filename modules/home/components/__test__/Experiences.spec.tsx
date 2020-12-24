/* eslint-disable react/prop-types */
import * as React from 'react'
import { mountWithTheme } from '~/modules/core/utils/withThemeProviders'
import Experiences from '~/modules/home/components/Experiences'

const MockVerticalTimelineElement = () => <div />

jest.mock('react-vertical-timeline-component', () => ({
  VerticalTimeline: ({ children }) => children,
  VerticalTimelineElement: () => MockVerticalTimelineElement
}))

describe('Experiences', () => {
  it('should render without throwing an error', function() {
    const wrap = mountWithTheme(<Experiences />)
    expect(wrap).toMatchSnapshot()
  })
})
