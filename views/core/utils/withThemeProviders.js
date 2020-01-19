import { shallow, mount } from 'enzyme'
import { ThemeConsumer } from 'styled-components/macro'
import homeTheme from '~/theme/theme'
import baseTheme from '~/theme/baseTheme'

/* istanbul ignore next */
export const shallowWithTheme = (children, theme = homeTheme) => {
  ThemeConsumer._currentValue = theme
  return shallow(children)
}

/* istanbul ignore next */
export const shallowWithDivingTheme = (children, theme = homeTheme) => {
  ThemeConsumer._currentValue = theme
  return shallow(children).dive()
}

/* istanbul ignore next */
export const mountWithTheme = (children, theme = homeTheme) => {
  ThemeConsumer._currentValue = theme
  return mount(children)
}

/* istanbul ignore next */
export const shallowWithBaseTheme = (children, theme = baseTheme) => {
  ThemeConsumer._currentValue = theme
  return shallow(children)
}
