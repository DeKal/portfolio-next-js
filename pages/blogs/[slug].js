import React from 'react'
import Head from '~/modules/post/components/Head'
import Navbar from '~/modules/core/components/PostNavbar'
import PostContent from '~/modules/post/containers/Post'
import { PostProvider } from '~/modules/post/state/provider'

const Post = () => (
  <PostProvider>
    <Head />
    <Navbar />
    <PostContent />
  </PostProvider>
)

export default Post
