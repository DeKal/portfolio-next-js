import React from 'react'
import PropTypes from 'prop-types'
import PostSummary from '~/modules/blogs/components/blogs/PostSummary'
import Container from '~/modules/blogs/components/blogs/Container'

const Blogs = ({ posts }) => {
  return (
    <Container>
      {posts.map(postSummary => {
        return (
          <PostSummary
            key={postSummary.slug}
            title={postSummary.title}
            slug={postSummary.slug}
            brief={postSummary.brief}
            author={postSummary.author}
            time={postSummary.time}
          />
        )
      })}
    </Container>
  )
}

Blogs.propTypes = {
  posts: PropTypes.array
}

export default Blogs
