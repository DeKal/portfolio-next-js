import { shallow, mount } from 'enzyme'
import { ThemeConsumer } from 'styled-components/macro'
import defaultTheme from '~/theme/theme'

export const shallowWithTheme = (children, theme = defaultTheme) => {
  ThemeConsumer._currentValue = theme
  return shallow(children)
}

export const shallowWithDivingTheme = (children, theme = defaultTheme) => {
  ThemeConsumer._currentValue = theme
  return shallow(children).dive()
}

export const mountWithTheme = (children, theme = defaultTheme) => {
  ThemeConsumer._currentValue = theme
  return mount(children)
}
