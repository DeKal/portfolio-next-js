import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PropTypes from 'prop-types'
import Container from './postinfo/Container'
import ColNoGutter from './postinfo/ColNoGutter'
import Avatar from './postinfo/Avatar'
import ColInfo from './postinfo/ColInfo'
import Author from './postinfo/Author'
import SubInfo from './postinfo/SubInfo'

const PostInfo = ({ authorName, date, minRead, avatar }) => {
  return (
    <Container>
      <Col md={6}>
        <Row>
          <ColNoGutter xs={'auto'} sm={'auto'}>
            <Avatar alt={authorName} src={avatar} />
          </ColNoGutter>
          <ColInfo>
            <Row noGutters>
              <Author> {authorName} </Author>
            </Row>
            <Row noGutters>
              <SubInfo>{`${date} - ${minRead} mins read`}</SubInfo>
            </Row>
          </ColInfo>
        </Row>
      </Col>
      <Col md={{ span: 2, offset: 4 }}></Col>
    </Container>
  )
}

PostInfo.propTypes = {
  authorName: PropTypes.string,
  date: PropTypes.string,
  minRead: PropTypes.string,
  avatar: PropTypes.string
}

export default PostInfo
