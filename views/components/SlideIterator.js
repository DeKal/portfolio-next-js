import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Zoom from 'react-reveal/Zoom'

const SlideIterator = ({ children }) => {
  return (
    <Fragment>
      {children.map((element, index) => (
        <Zoom key={index} left>
          {element}
        </Zoom>
      ))}
    </Fragment>
  )
}

SlideIterator.propTypes = {
  children: PropTypes.array
}
export default SlideIterator
