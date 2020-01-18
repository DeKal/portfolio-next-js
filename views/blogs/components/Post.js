import React from 'react'
import { useRouter } from 'next/router'
import BContainer from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components/macro'

const data = {
  header: 'Search: The Whole Story',
  content:
    'Query understanding and relevance are key aspects of search, but they don’t tell the whole story. A holistic framework for search calls for a broader perspective. Search is about computers helping humans help themselves, a framework also known as human-computer information retrieval (HCIR). In order to understand search as HCIR, we need to consider it from both the human and computational perspectives.Query understanding and relevance are key aspects of search, but they don’t tell the whole story. A holistic framework for search calls for a broader perspective. Search is about computers helping humans help themselves, a framework also known as human-computer information retrieval (HCIR). In order to understand search as HCIR, we need to consider it from both the human and computational perspectives.Query understanding and relevance are key aspects of search, but they don’t tell the whole story. A holistic framework for search calls for a broader perspective. Search is about computers helping humans help themselves, a framework also known as human-computer information retrieval (HCIR). In order to understand search as HCIR, we need to consider it from both the human and computational perspectives.',
  authorName: 'Daniel Tunkelang',
  date: 'Mar 25, 2019'
}

const Posts = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Container>
      <article>
        <Row>
          <Header>{data.header}</Header>
        </Row>

        <InfoRow>
          <Col md={6}>
            <Row>
              <ColNoGutter xs={'auto'} sm={'auto'}>
                <Avatar
                  alt={data.authorName}
                  src="/images/blogs/default-avatar.png"
                />
              </ColNoGutter>
              <Info>
                <Row noGutters>
                  <Author> {data.authorName} </Author>
                </Row>
                <Row noGutters>
                  <Date> {data.date} </Date>
                </Row>
              </Info>
            </Row>
          </Col>
          <Col md={{ span: 2, offset: 4 }}></Col>
        </InfoRow>
        <Content>{data.content}</Content>
      </article>
    </Container>
  )
}

export default Posts

const Container = styled(BContainer)`
  margin-top: ${props => props.theme.postPaddingTop};
  padding: 35px;
  background-color: white;

  @media (min-width: 768px),
    @media (min-width: 992px),
    @media (min-width: 1200px) {
    max-width: 768px !important;
  }
`
const Header = styled.h1`
  line-height: 48px;
  font-size: 40px;
  color: rgba(0, 0, 0, 0.84);
  font-weight: 400;
`
const InfoRow = styled(Row)`
  margin-top: 32px;
`
const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: block;
  vertical-align: middle;
`
const Info = styled(Col)`
  display: block;
  width: 100%;
  padding-left: 12px;
`
const Date = styled.div`
  font-weight: 300;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
`

const Author = styled.div`
  line-height: 20px;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.84);
  font-weight: 400;
  margin-bottom: 2px;
`
const ColNoGutter = styled(Col)`
  padding-left: 0;
  padding-right: 0;
`
const Content = styled.div`
  margin-top: 2em;
  font-size: 22px;
  letter-spacing: -0.004em;
  line-height: 38px;
  color: rgba(0, 0, 0, 0.84);
  font-family: Georgia, Cambria, 'Times New Roman', Times, serif;
`
