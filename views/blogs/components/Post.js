import React from 'react'
// import { useRouter } from 'next/router'
import Row from 'react-bootstrap/Row'
import Container from '~/views/blogs/components/post/Container'
import Header from '~/views/blogs/components/post/Header'
import PostInfo from '~/views/blogs/components/post/PostInfo'
import Content from '~/views/blogs/components/post/Content'

const data = {
  header: 'Search: The Whole Story',
  content:
    'Query understanding and relevance are key aspects of search, but they don’t tell the whole story. A holistic framework for search calls for a broader perspective. Search is about computers helping humans help themselves, a framework also known as human-computer information retrieval (HCIR). In order to understand search as HCIR, we need to consider it from both the human and computational perspectives.Query understanding and relevance are key aspects of search, but they don’t tell the whole story. A holistic framework for search calls for a broader perspective. Search is about computers helping humans help themselves, a framework also known as human-computer information retrieval (HCIR). In order to understand search as HCIR, we need to consider it from both the human and computational perspectives.Query understanding and relevance are key aspects of search, but they don’t tell the whole story. A holistic framework for search calls for a broader perspective. Search is about computers helping humans help themselves, a framework also known as human-computer information retrieval (HCIR). In order to understand search as HCIR, we need to consider it from both the human and computational perspectives.',
  authorName: 'Daniel Tunkelang',
  date: 'Mar 25, 2019',
  minRead: '6'
}

const Post = () => {
  // const router = useRouter()
  // const { id } = router.query

  return (
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
        <Content>{data.content}</Content>
      </article>
    </Container>
  )
}

export default Post
