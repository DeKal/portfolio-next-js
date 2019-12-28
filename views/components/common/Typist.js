import React from 'react'
import PropTypes from 'prop-types'

const Typist = ({ children, blink }) => {
  const borderRight = blink ? '0.15em solid #ecf0f1' : ''
  return (
    <div className="type-effect">
      {children}
      <style jsx>{`
        .type-effect {
          overflow: hidden;
          white-space: nowrap;
          border-right: ${borderRight};
          animation: typing 1s steps(40, end),
            blink-caret 0.5s step-end infinite;
        }
        /* The typing effect */
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        /* The typewriter cursor effect */
        @keyframes blink-caret {
          from,
          to {
            border-color: transparent;
          }
          50% {
            border-color: #ecf0f1;
          }
        }
      `}</style>
    </div>
  )
}

Typist.propTypes = {
  children: PropTypes.any,
  blink: PropTypes.bool
}
export default Typist
