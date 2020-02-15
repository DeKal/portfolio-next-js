/* istanbul ignore file */
import React from 'react'

const BlogsStateContext = React.createContext()
const BlogsDispatchContext = React.createContext()

const useBlogsState = () => {
  const context = React.useContext(BlogsStateContext)
  if (context === undefined) {
    throw new Error('useBlogsState must be used within a PostProvider')
  }
  return context
}

const useBlogsDispatch = () => {
  const context = React.useContext(BlogsDispatchContext)
  if (context === undefined) {
    throw new Error('useBlogsDispatch must be used within a PostProvider')
  }
  return context
}

export {
  BlogsStateContext,
  BlogsDispatchContext,
  useBlogsState,
  useBlogsDispatch
}
