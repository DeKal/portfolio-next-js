import { INIT_SELECTED_PAGE } from '~/modules/home/consts/initState'
import $ from 'jquery'

/* istanbul ignore next */
export const initHashLocation = () => {
  if (location.hash) {
    const offset = $(location.hash).offset()
    if (offset) {
      window.scrollTo(offset.left, offset.top)
    } else {
      setTimeout(() => {
        const offset = $(location.hash).offset()
        window.scrollTo(offset.left, offset.top)
      }, 1000)
    }
  }
}

export const isSafari = () => {
  var userAgent = navigator.userAgent.toLowerCase()
  return /^((?!chrome|android).)*safari/i.test(userAgent)
}

/* istanbul ignore next */
export const setJqueryScrollEvent = () => {
  $('a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash) {
      // Prevent default anchor click behavior
      event.preventDefault()
      // Store hash
      var hash = this.hash

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        200,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash
        }
      )
    } // End if
  })
}

/* istanbul ignore next */
export const cleanUpScrollEvent = () => {
  $('a').unbind()
}

/* istanbul ignore next */
export const getSelectedSection = () => {
  if (location.hash.length !== 0) {
    const selectedPage = location.hash.substr(1)
    return selectedPage
  } else if (location.pathname.length !== 0) {
    return location.pathname.substr(1)
  }

  return INIT_SELECTED_PAGE
}

export const isChristmasDay = () => {
  const today = new Date()
  const month = today.getMonth() + 1
  const isDecember = month == 12
  const day = today.getDate()
  const isChristMasTime = 20 <= day && day <= 30
  return isDecember && isChristMasTime
}

export const isNewYearComing = () => {
  const today = new Date()
  const day = today.getDate()
  const isFirstTwoWeek = 1 <= day && day <= 16
  const month = today.getMonth() + 1
  const isJanuary = month == 1
  const isLastDayOfDec = day == 31
  const isDec = month == 12
  return (isLastDayOfDec && isDec) || (isJanuary && isFirstTwoWeek)
}

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height
  }
}

export const isTet = () => {
  const today = new Date()
  const day = today.getDate()
  const isTetTime = 23 <= day && day <= 31
  const month = today.getMonth() + 1
  const isJanuary = month == 1

  return isJanuary && isTetTime
}

export const isBlogs = path => {
  return /blogs/.test(path)
}
