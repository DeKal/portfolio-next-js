import React from 'react'
import Head from '~/modules/blogs/components/Head'
import Navbar from '~/modules/blogs/components/Navbar'
import Post from '~/modules/blogs/containers/Post'
import { PostProvider } from '~/modules/blogs/state/post/provider'

const Blogs = () => (
  <PostProvider>
    <Head />
    <Navbar />
    <Post />
  </PostProvider>
)

export default Blogs
