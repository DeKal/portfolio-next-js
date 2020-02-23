import React from 'react'
import Head from '~/modules/post/components/Head'
import Navbar from '~/modules/core/components/PostNavbar'
import PostContent from '~/modules/post/containers/Post'
import { Provider } from '~/modules/core/state/provider'

const Post = () => (
  <Provider>
    <Head />
    <Navbar />
    <PostContent />
  </Provider>
)

export default Post
