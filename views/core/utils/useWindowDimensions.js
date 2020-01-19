import { useState, useEffect } from 'react'
import { getWindowDimensions } from '~/views/core/utils/helpers'

/* istanbul ignore next */
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    /* istanbul ignore next */
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    /* istanbul ignore next */
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions
