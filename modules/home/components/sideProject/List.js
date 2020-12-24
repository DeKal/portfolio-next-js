import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Item from '~/modules/home/components/sideProject/Item'
import Col from 'react-bootstrap/Col'

const List = ({ companies }) =>
  companies.map(company => (
    <Col md={Math.floor(12 / companies.length)} key={company}>
      <Container>
        <Item
          title={`Exp: ${company} Title`}
          role={`Exp: ${company} Role`}
          dates={`Exp: ${company} Dates`}
          description={`Exp: ${company} Desc`}
          skill={`Exp: ${company} Skill`}
        />
      </Container>
    </Col>
  ))

List.propTypes = {
  companies: PropTypes.any
}

export default List

const Container = styled.div`
  padding: 0 15px;
`
