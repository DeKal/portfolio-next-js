/* istanbul ignore file */
import React from 'react'

const CountStateContext = React.createContext()
const CountDispatchContext = React.createContext()

const usePostState = () => {
  const context = React.useContext(CountStateContext)
  if (context === undefined) {
    throw new Error('usePostState must be used within a PostProvider')
  }
  return context
}

const usePostDispatch = () => {
  const context = React.useContext(CountDispatchContext)
  if (context === undefined) {
    throw new Error('usePostDispatch must be used within a PostProvider')
  }
  return context
}

export {
  CountStateContext,
  CountDispatchContext,
  usePostState,
  usePostDispatch
}
