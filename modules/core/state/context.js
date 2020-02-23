/* istanbul ignore file */
import React from 'react'

const StateContext = React.createContext()
const DispatchContext = React.createContext()

const useState = () => {
  const context = React.useContext(StateContext)
  if (context === undefined) {
    throw new Error('useState must be used within a Provider')
  }
  return context
}

const useDispatch = () => {
  const context = React.useContext(DispatchContext)
  if (context === undefined) {
    throw new Error('useDispatch must be used within a Provider')
  }
  return context
}

export { StateContext, DispatchContext, useState, useDispatch }
