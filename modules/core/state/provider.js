/* istanbul ignore file */
import React from 'react'
import PropTypes from 'prop-types'
import { initialData, reducer } from '~/modules/core/state/reducer'
import { StateContext, DispatchContext } from '~/modules/core/state/context'

const Provider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialData)
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}
Provider.propTypes = {
  children: PropTypes.any
}

export { Provider }
