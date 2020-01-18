import React, { Fragment } from 'react'
import Head from '~/views/blogs/components/Head'
import StickyNav from '~/views/blogs/components/StickyNav'
import Post from '~/views/blogs/components/Post'

const Blogs = () => (
  <Fragment>
    <Head />
    <StickyNav />
    <Post />
  </Fragment>
)

export default Blogs
