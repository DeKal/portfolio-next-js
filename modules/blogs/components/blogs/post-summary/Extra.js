import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

import { Container, Row, Col } from 'react-bootstrap'

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: block;
  vertical-align: middle;
`

const ColInfo = styled(Col)`
  width: 100%;
  padding-left: 5px;
`
const Author = styled.div`
  line-height: 20px;
  font-size: ${props => props.theme.fontSizes.gutter};
  color: ${props => props.theme.colors.dark};
  font-weight: 400;
  margin-bottom: 2px;
`

const SubInfo = styled.div`
  font-weight: 300;
  font-size: ${props => props.theme.fontSizes.xsmall};
  color: ${props => props.theme.colors.lightDark};
`

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
