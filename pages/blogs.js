import React from 'react'

import Head from '~/modules/blogs/components/Head'
import Navbar from '~/modules/core/components/PostNavbar'
import BlogList from '~/modules/blogs/containers/Blogs'
import { Provider } from '~/modules/core/state/provider'

const Blogs = () => (
  <Provider>
    <Head />
    <Navbar />
    <BlogList />
  </Provider>
)

export default Blogs
