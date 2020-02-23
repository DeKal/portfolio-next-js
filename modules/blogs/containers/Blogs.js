import React, { useEffect } from 'react'
import BlogsComponent from '~/modules/blogs/components/Blogs'
import Dispatcher from '~/modules/core/dispatch/Dispatcher'
import { getPostSummary } from '~/modules/blogs/state/action'
import { useState, useDispatch } from '~/modules/core/state/context'

const Blogs = () => {
  const state = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    Dispatcher(dispatch).send(getPostSummary)
  }, [])

  const { loading, error, data } = state
  return error ? (
    <div>{error.toString()}</div>
  ) : loading ? (
    <div> </div>
  ) : (
    <BlogsComponent posts={data} />
  )
}

export default Blogs
