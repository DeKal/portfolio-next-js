import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import PostComponent from '~/views/blogs/components/Post'
import Dispatcher from '~/views/core/dispatch/Dispatcher'
import { getPostWithSlug } from '../state/post/action'
import { usePostState, usePostDispatch } from '../state/post/context'

const Post = () => {
  const state = usePostState()
  const dispatch = usePostDispatch()
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (!slug) return
    Dispatcher(dispatch).send(getPostWithSlug, slug)
  }, [router])

  const { loading, error, data } = state
  return error ? (
    <div>{error.toString()}</div>
  ) : loading ? (
    <div> </div>
  ) : (
    <PostComponent data={data} />
  )
}

export default Post
