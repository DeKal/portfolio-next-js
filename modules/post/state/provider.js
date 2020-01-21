/* istanbul ignore file */
import React from 'react'
import PropTypes from 'prop-types'
import { postReducer } from '~/modules/post/state/reducer'
import {
  CountStateContext,
  CountDispatchContext
} from '~/modules/post/state/context'

const initialData = {
  loading: true
}

const PostProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(postReducer, initialData)
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  )
}
PostProvider.propTypes = {
  children: PropTypes.any
}

export { PostProvider }
