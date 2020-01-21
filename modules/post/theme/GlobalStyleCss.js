import React from 'react'
import PropTypes from 'prop-types'

const GlobalStyleCss = () => {
  return (
    <style jsx global>{`
      p {
        margin-top: 1.5em;
        margin-bottom: 5px;
      }
      h1 {
        margin-top: 2em;
      }
      h2,
      h3,
      h4,
      h5,
      h6 {
        margin-top: 1.7em;
      }
    `}</style>
  )
}

GlobalStyleCss.propTypes = {
  theme: PropTypes.any
}

export default GlobalStyleCss
