import { INIT_SELECTED_PAGE } from '~/consts/initState'

export const offsetAnchor = () => {
  if (location.hash.length !== 0) {
    window.scrollTo(window.scrollX, window.scrollY)
  }
}

export const getSelectedSection = () => {
  if (location.hash.length !== 0) {
    const selectedPage = location.hash.substr(1)
    return selectedPage
  }
  return INIT_SELECTED_PAGE
}
