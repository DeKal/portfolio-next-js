import { shallow, mount } from 'enzyme'
import { ThemeConsumer } from 'styled-components/macro'
import defaultTheme from '~/views/theme'

export const shallowWithTheme = (children, theme = defaultTheme) => {
  ThemeConsumer._currentValue = theme
  return shallow(children)
}

export const mountWithTheme = (children, theme = defaultTheme) => {
  ThemeConsumer._currentValue = theme
  return mount(children)
}
