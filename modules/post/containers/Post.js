import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import PostComponent from '~/modules/post/components/Post'
import Dispatcher from '~/modules/core/dispatch/Dispatcher'
import { getPostWithSlug } from '~/modules/post/state/action'
import { useState, useDispatch } from '~/modules/core/state/context'

const Post = () => {
  const state = useState()
  const dispatch = useDispatch()
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
