import React from 'react'
import PropTypes from 'prop-types'

const GlobalStyleCss = ({ theme }) => {
  return (
    <style jsx global>{`
      html,
      body {
        color: ${theme.colors.colorDark};
      }
      h1 {
        color: ${theme.colors.colorLight};
      }
      a {
        color: ${theme.colors.colorDark};
        border-bottom: 1px dashed ${theme.colors.colorDark};
      }
      body:after {
        content: '';
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        opacity: ${theme.images.bgPatternOpacity};
        z-index: -1;
        background: ${theme.colors.bgColor} url(${theme.images.bgPattern});
      }
      *:selection {
        color: ${theme.colors.colorLight};
        background-color: ${theme.colors.colorDarken};
      }
      *::-moz-selection {
        color: ${theme.colors.colorLight};
        background-color: ${theme.colors.colorDarken};
      }
    `}</style>
  )
}

GlobalStyleCss.propTypes = {
  theme: PropTypes.any
}

export default GlobalStyleCss
