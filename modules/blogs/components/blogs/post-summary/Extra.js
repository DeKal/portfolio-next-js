import React from 'react'
import PropTypes from 'prop-types'

import { Container, Row, Col } from 'react-bootstrap'
import Author from './extra/Author'
import Avatar from './extra/Avatar'
import ColInfo from './extra/ColInfo'
import SubInfo from './extra/SubInfo'

const Extra = ({ author, avatar, date, minRead }) => (
  <Container>
    <Row>
      <Col xs={'auto'} sm={'auto'}>
        <Avatar alt={author} src={avatar} />
      </Col>
      <ColInfo>
        <Row noGutters>
          <Author> {author} </Author>
        </Row>
        <Row noGutters>
          <SubInfo>{`${date} - ${minRead} mins read`}</SubInfo>
        </Row>
      </ColInfo>
    </Row>
  </Container>
)

Extra.propTypes = {
  author: PropTypes.string,
  avatar: PropTypes.string,
  date: PropTypes.string,
  minRead: PropTypes.string
}

export default Extra
