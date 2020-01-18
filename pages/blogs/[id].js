import React, { Fragment } from 'react'
import Head from '~/views/blogs/components/Head'
import Navbar from '~/views/blogs/components/Navbar'
import Post from '~/views/blogs/components/Post'

const Blogs = () => (
  <Fragment>
    <Head />
    <Navbar />
    <Post />
  </Fragment>
)

export default Blogs
