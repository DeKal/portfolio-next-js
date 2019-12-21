import { INIT_SELECTED_PAGE } from '~/consts/initState'
import $ from 'jquery'

export const initHashLocation = () => {
  if (location.hash) {
    const offset = $(location.hash).offset()
    window.scrollTo(offset.left, offset.top)
  }
}

export const isSafari = () => {
  var userAgent = navigator.userAgent.toLowerCase()
  if (userAgent.indexOf('safari') != -1) {
    // Safari agent will not have Chrome
    if (userAgent.indexOf('chrome') > -1) {
      return false
    } else {
      return true
    }
  }
}

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
        300,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash
        }
      )
    } // End if
  })
}

export const cleanUpScrollEvent = () => {
  $('a').unbind()
}

export const getSelectedSection = () => {
  if (location.hash.length !== 0) {
    const selectedPage = location.hash.substr(1)
    return selectedPage
  }
  return INIT_SELECTED_PAGE
}
