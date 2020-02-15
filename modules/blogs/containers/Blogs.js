import React, { useEffect } from 'react'
import BlogsComponent from '~/modules/blogs/components/Blogs'
import Dispatcher from '~/modules/core/dispatch/Dispatcher'
import { getPostSummary } from '~/modules/blogs/state/action'
import { useBlogsState, useBlogsDispatch } from '~/modules/blogs/state/context'

const Blogs = () => {
  const state = useBlogsState()
  const dispatch = useBlogsDispatch()

  useEffect(() => {
    Dispatcher(dispatch).send(getPostSummary)
  }, [])

  const { loading, error, data } = state
  return error ? (
    <div>{error.toString()}</div>
  ) : loading ? (
    <div> </div>
  ) : (
    <BlogsComponent data={data} />
  )
}

export default Blogs
