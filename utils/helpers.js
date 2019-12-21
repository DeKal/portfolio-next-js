import { ABOUT } from '~/consts/pages'

export const offsetAnchor = () => {
  if (location.hash.length !== 0) {
    const adjustPixel = calcAdjustPixel(location.hash)
    window.scrollTo(window.scrollX, window.scrollY + adjustPixel)
  }
}

const calcAdjustPixel = locationHash => {
  if (locationHash === `#${ABOUT}`) {
    return -150
  }
  return -50
}
