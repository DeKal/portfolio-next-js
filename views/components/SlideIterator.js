import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

const SlideIterator = ({ children }) => {
  return (
    <Fragment>
      {children.map((element, index) => (
        <Fade key={index} left={index % 2 == 0} right={index % 2 != 0}>
          {element}
        </Fade>
      ))}
    </Fragment>
  )
}

SlideIterator.propTypes = {
  children: PropTypes.array
}
export default SlideIterator
