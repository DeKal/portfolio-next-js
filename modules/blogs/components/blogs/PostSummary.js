import React from 'react'
import PropTypes from 'prop-types'
import Container from './post-summary/Container'
import Content from './post-summary/Content'
import Extra from './post-summary/Extra'
import Article from './post-summary/Article'

const PostSummary = ({ header, author, date, brief, slug }) => {
  return (
    <Container>
      <Content>
        <Extra
          author={author}
          date={date}
          minRead={'6'}
          avatar={'/images/blogs/default-avatar.png'}
        />
        <Article header={header} brief={brief} slug={slug} />
      </Content>
    </Container>
  )
}

PostSummary.propTypes = {
  header: PropTypes.string,
  slug: PropTypes.string,
  brief: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string
}

export default PostSummary
