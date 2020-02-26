import React from 'react'
import PropTypes from 'prop-types'
import Container from './post-summary/Container'
import Content from './post-summary/Content'
import Extra from './post-summary/Extra'
import Article from './post-summary/Article'

const PostSummary = ({ title, author, time, brief, slug }) => {
  return (
    <Container>
      <Content>
        <Extra
          author={author}
          date={time}
          minRead={'6'}
          avatar={'/images/blogs/default-avatar.png'}
        />
        <Article title={title} brief={brief} slug={slug} />
      </Content>
    </Container>
  )
}

PostSummary.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
  brief: PropTypes.string,
  author: PropTypes.string,
  time: PropTypes.string
}

export default PostSummary
