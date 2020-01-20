import React from 'react'
import PropTypes from 'prop-types'
import Row from 'react-bootstrap/Row'
import Container from '~/modules/blogs/components/post/Container'
import Header from '~/modules/blogs/components/post/Header'
import PostInfo from '~/modules/blogs/components/post/PostInfo'
import Content from '~/modules/blogs/components/post/Content'

const Post = ({ data }) => (
  <Container>
    <article>
      <Row>
        <Header>{data.header}</Header>
      </Row>
      <PostInfo
        authorName={data.authorName}
        avatar={'/images/blogs/default-avatar.png'}
        date={data.date}
        minRead={data.minRead}
      />
      <Content>
        <div dangerouslySetInnerHTML={createMarkup(data.content)} />
      </Content>
    </article>
  </Container>
)
function createMarkup(content) {
  return { __html: content }
}

Post.propTypes = {
  data: PropTypes.shape({
    header: PropTypes.string,
    authorName: PropTypes.string,
    date: PropTypes.string,
    minRead: PropTypes.string,
    content: PropTypes.string
  })
}
export default Post
