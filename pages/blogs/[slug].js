import React from 'react'
import Head from '~/views/blogs/components/Head'
import Navbar from '~/views/blogs/components/Navbar'
import Post from '~/views/blogs/containers/Post'
import { PostProvider } from '~/views/blogs/state/post/provider'

const Blogs = () => (
  <PostProvider>
    <Head />
    <Navbar />
    <Post />
  </PostProvider>
)

export default Blogs
