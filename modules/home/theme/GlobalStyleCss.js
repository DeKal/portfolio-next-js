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

      @font-face {
        font-family: 'ip';
        src: url('/fonts/ip/font/ip.eot');
        src: url('/fonts/ip/font/ip.eot#iefix') format('embedded-opentype'),
          url('/fonts/ip/font/ip.woff') format('woff'),
          url('/fonts/ip/font/ip.ttf') format('truetype'),
          url('/fonts/ip/font/ip.svg') format('svg');
        font-weight: normal;
        font-style: normal;
      }

      html,
      body,
      div,
      span,
      applet,
      object,
      iframe,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      blockquote,
      pre,
      a,
      abbr,
      acronym,
      address,
      big,
      cite,
      code,
      del,
      dfn,
      em,
      img,
      ins,
      kbd,
      q,
      s,
      samp,
      small,
      strike,
      strong,
      sub,
      sup,
      tt,
      var,
      b,
      u,
      i,
      center,
      dl,
      dt,
      dd,
      ol,
      ul,
      li,
      fieldset,
      form,
      input,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td,
      article,
      aside,
      canvas,
      details,
      embed,
      figure,
      figcaption,
      footer,
      header,
      hgroup,
      menu,
      nav,
      output,
      ruby,
      section,
      summary,
      time,
      mark,
      audio,
      video {
        margin: 0;
        padding: 0;
        border: 0;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        display: block;
      }

      nav ol,
      nav ul {
        list-style: none;
      }

      blockquote,
      q {
        quotes: none;
      }

      blockquote cite {
        font-style: normal;
      }

      blockquote:before,
      blockquote:after,
      q:before,
      q:after {
        content: '';
        content: none;
      }

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      button,
      input[type='submit'] {
        cursor: pointer;
      }

      html,
      body {
        width: 100%;
        height: 100%;
        font-family: 'open sans', Tahoma, Verdana, Arial, sans-serif;
        line-height: 1.2;
        scroll-behavior: smooth;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-weight: normal;
      }

      h1 {
        font-size: 60px;
        font-family: Georgia, Times, 'Times New Roman', serif;
      }
      @media screen and (max-width: 1200px) {
        h1 {
          font-size: 55px;
        }
      }
      @media screen and (max-width: 800px) {
        h1 {
          font-size: 50px;
        }
      }

      h2 {
        font-family: Georgia, Times, 'Times New Roman', serif;
        font-size: 40px;
      }
      @media screen and (max-width: 1200px) {
        h2 {
          font-size: 35px;
        }
      }
      @media screen and (max-width: 800px) {
        h2 {
          font-size: 30px;
        }
      }

      h3 {
        font-size: 30px;
      }
      @media screen and (max-width: 1200px) {
        h3 {
          font-size: 25px;
        }
      }
      @media screen and (max-width: 800px) {
        h3 {
          font-size: 20px;
        }
      }

      h4 {
        font-size: 20px;
      }
      @media screen and (max-width: 1200px) {
        h4 {
          font-size: 18px;
        }
      }

      h5 {
        font-size: 18px;
      }
      @media screen and (max-width: 800px) {
        h5 {
          font-size: 16px;
        }
      }

      p {
        font-size: 16px;
        line-height: 1.5;
      }
      @media screen and (max-width: 800px) {
        p {
          font-size: 15px;
        }
      }

      li p {
        font-family: Georgia, Times, 'Times New Roman', serif;
        font-style: italic;
      }

      a {
        font-family: 'open sans', Tahoma, Verdana, Arial, sans-serif;
        font-size: 16px;
        text-decoration: none;
        outline-style: none;
      }
      a:hover {
        border-bottom: none;
      }
    `}</style>
  )
}

GlobalStyleCss.propTypes = {
  theme: PropTypes.any
}

export default GlobalStyleCss
