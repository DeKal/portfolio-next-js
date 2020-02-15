/* istanbul ignore file */
import React from 'react'
import PropTypes from 'prop-types'
import { reducer } from '~/modules/blogs/state/reducer'
import {
  BlogsStateContext,
  BlogsDispatchContext
} from '~/modules/blogs/state/context'

const initialData = {
  loading: true
}

const BlogsProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialData)
  return (
    <BlogsStateContext.Provider value={state}>
      <BlogsDispatchContext.Provider value={dispatch}>
        {children}
      </BlogsDispatchContext.Provider>
    </BlogsStateContext.Provider>
  )
}
BlogsProvider.propTypes = {
  children: PropTypes.any
}

export { BlogsProvider }
