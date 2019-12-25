import { shallow, mount } from 'enzyme'
import { ThemeConsumer } from 'styled-components/macro'
import defaultTheme from '~/theme/theme'

/* istanbul ignore next */
export const shallowWithTheme = (children, theme = defaultTheme) => {
  ThemeConsumer._currentValue = theme
  return shallow(children)
}

/* istanbul ignore next */
export const shallowWithDivingTheme = (children, theme = defaultTheme) => {
  ThemeConsumer._currentValue = theme
  return shallow(children).dive()
}

/* istanbul ignore next */
export const mountWithTheme = (children, theme = defaultTheme) => {
  ThemeConsumer._currentValue = theme
  return mount(children)
}
