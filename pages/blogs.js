import React from 'react'

import Head from '~/modules/blogs/components/Head'
import Navbar from '~/modules/core/components/PostNavbar'
import BlogList from '~/modules/blogs/containers/Blogs'
import { BlogsProvider } from '~/modules/blogs/state/provider'

const Blogs = () => (
  <BlogsProvider>
    <Head />
    <Navbar />
    <BlogList />
  </BlogsProvider>
)

export default Blogs
