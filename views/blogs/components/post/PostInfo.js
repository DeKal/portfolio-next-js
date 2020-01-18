import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const PostInfo = ({ authorName, date, minRead, avatar }) => {
  return (
    <InfoRow>
      <Col md={6}>
        <Row>
          <ColNoGutter xs={'auto'} sm={'auto'}>
            <Avatar alt={authorName} src={avatar} />
          </ColNoGutter>
          <Info>
            <Row noGutters>
              <Author> {authorName} </Author>
            </Row>
            <Row noGutters>
              <SubInfo>{`${date} - ${minRead} mins read`}</SubInfo>
            </Row>
          </Info>
        </Row>
      </Col>
      <Col md={{ span: 2, offset: 4 }}></Col>
    </InfoRow>
  )
}

PostInfo.propTypes = {
  authorName: PropTypes.string,
  date: PropTypes.string,
  minRead: PropTypes.string,
  avatar: PropTypes.string
}

export default PostInfo

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
const SubInfo = styled.div`
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
