import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { START_COUNT, MAX_LIMIT, TURN_PER_SEC, INTERVAL } from '~/consts/typist'

const Typist = ({ children }) => {
  const [seconds, setSeconds] = useState(START_COUNT)

  useEffect(() => {
    let interval = null

    interval = setInterval(() => {
      setSeconds(seconds => (seconds % MAX_LIMIT) + 1)
    }, INTERVAL)

    return () => clearInterval(interval)
  }, [seconds])

  return <div>{pickOneElementToRender(children, seconds)}</div>
}

Typist.propTypes = {
  children: PropTypes.any
}
export default Typist

const pickOneElementToRender = (children, seconds) => {
  const turn = Math.floor(seconds / TURN_PER_SEC)
  return (
    <div key={turn} className={`type-effect`}>
      {children[turn % children.length]}
      <style jsx>{`
        .type-effect {
          overflow: hidden;
          white-space: nowrap;
          border-right: 0.15em solid #ecf0f1;
          animation: typing 1.25s steps(40, end),
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
